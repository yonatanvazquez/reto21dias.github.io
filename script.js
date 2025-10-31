/**
 * 21 Days Challenge - Progress Tracker
 * Tracks daily exercise progress with 5 completion levels
 */

// Daily motivational phrases
const phrases = [
  "Empiezo. Respiro y avanzo.",
  "Mis pulmones trabajan, yo decido.",
  "Ya aguanto más que ayer.",
  "El aire entra más fácil, el ánimo también.",
  "Mi cuerpo se adapta, mi mente se ordena.",
  "Hoy respiro más profundo que antes.",
  "Una semana: el cansancio pesa menos.",
  "Cada inhalación me da control.",
  "Mi ritmo mejora, mi carácter también.",
  "No me detengo: el aire ya es aliado.",
  "Me fatigo menos, me recupero más rápido.",
  "El corazón late firme, yo lo acompaño.",
  "La resistencia aparece donde antes faltaba.",
  "Dos semanas: camino más ligero.",
  "El aire me sigue el paso, no me falta.",
  "Respiro mejor, vivo mejor.",
  "Siento potencia en cada inhalación.",
  "Mis pulmones responden, mi ánimo también.",
  "Corro más, me canso menos.",
  "La fuerza está en mi aire y en mi mente.",
  "El reto fue físico, el cambio es mental… y respiro libre."
];

// LocalStorage key for persisting state
const STORAGE_KEY = "reto21_grid_state_v1";
const TOTAL_DAYS = 21;
const MAX_LEVEL = 4;

// DOM elements
const gridEl = document.getElementById("grid");
const listEl = document.getElementById("phrasesList");
const resetBtn = document.getElementById("reset");

/**
 * Load state from localStorage
 * @returns {number[]} Array of 21 numbers representing completion levels (0-4)
 */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return Array(TOTAL_DAYS).fill(0);
    }
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length !== TOTAL_DAYS) {
      return Array(TOTAL_DAYS).fill(0);
    }
    // Ensure values are within valid range (0-4)
    return arr.map(x => Math.max(0, Math.min(MAX_LEVEL, Number(x) || 0)));
  } catch (e) {
    console.error("Error loading state:", e);
    return Array(TOTAL_DAYS).fill(0);
  }
}

/**
 * Save state to localStorage
 * @param {number[]} state - Array of completion levels
 */
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Error saving state:", e);
  }
}

// Initialize state
const state = loadState();

/**
 * Create a cell element for a specific day
 * @param {number} dayIdx - Zero-based day index (0-20)
 * @returns {HTMLElement} Cell button element
 */
function makeCell(dayIdx) {
  const dayNumber = dayIdx + 1;
  const cell = document.createElement("button");
  cell.className = "cell";
  cell.type = "button";
  cell.setAttribute("role", "listitem");
  cell.setAttribute("aria-label", `Día ${dayNumber}: ${phrases[dayIdx]}`);
  cell.dataset.index = dayIdx;
  cell.dataset.level = state[dayIdx];

  // Day number display
  const day = document.createElement("span");
  day.className = "day";
  day.textContent = dayNumber.toString();
  cell.appendChild(day);

  // Tooltip with phrase
  const tip = document.createElement("div");
  tip.className = "tip";
  tip.innerHTML = `<span class="t-day">Día ${dayNumber}</span><br>${phrases[dayIdx]}`;
  cell.appendChild(tip);

  // Click handler: cycle through levels (0 → 1 → 2 → 3 → 4 → 0)
  cell.addEventListener("click", () => {
    const currentLevel = Number(cell.dataset.level) || 0;
    const nextLevel = (currentLevel + 1) % 5; // Cycle 0..4
    cell.dataset.level = nextLevel;
    state[dayIdx] = nextLevel;
    saveState(state);
  });

  // Keyboard shortcuts
  // Shift+Click → mark as complete (level 4)
  // Alt+Click → mark as empty (level 0)
  cell.addEventListener("mousedown", (ev) => {
    if (ev.shiftKey) {
      cell.dataset.level = MAX_LEVEL;
      state[dayIdx] = MAX_LEVEL;
      saveState(state);
      ev.preventDefault();
    }
    if (ev.altKey) {
      cell.dataset.level = 0;
      state[dayIdx] = 0;
      saveState(state);
      ev.preventDefault();
    }
  });

  return cell;
}

/**
 * Render the 21-day grid (3 rows × 7 columns)
 */
function renderGrid() {
  gridEl.innerHTML = "";
  for (let i = 0; i < TOTAL_DAYS; i++) {
    gridEl.appendChild(makeCell(i));
  }
}

/**
 * Render the phrases list
 */
function renderList() {
  listEl.innerHTML = "";
  for (let i = 0; i < TOTAL_DAYS; i++) {
    const box = document.createElement("div");
    box.className = "phrase-item";
    box.innerHTML = `<b>Día ${i + 1}:</b> ${phrases[i]}`;
    listEl.appendChild(box);
  }
}

/**
 * Reset all progress to zero
 */
function handleReset() {
  for (let i = 0; i < TOTAL_DAYS; i++) {
    state[i] = 0;
  }
  saveState(state);
  renderGrid();
}

// Event listeners
resetBtn.addEventListener("click", handleReset);

// Initialize the application
renderGrid();
renderList();

