# 🏃 Reto 21 Días

<div align="center">

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Una aplicación web moderna y elegante para seguir tu progreso en un reto de 21 días de ejercicio.

[🌐 Ver en vivo](https://yonatanvazquez.github.io/21dias/) · [📋 Reportar un bug](https://github.com/yonatanvazquez/21dias/issues) · [💡 Solicitar funcionalidad](https://github.com/yonatanvazquez/21dias/issues)

</div>

---

## 📖 Descripción

**Reto 21 Días** es una herramienta web minimalista y eficiente diseñada para ayudarte a mantener la motivación y hacer seguimiento de tu progreso diario durante un reto de 21 días de ejercicio. Inspirado en el estilo visual de GitHub, ofrece una experiencia de usuario limpia y profesional.

### ✨ Características principales

- 📅 **Grid interactivo**: Matriz visual de 21 días (3 filas × 7 columnas) para seguimiento diario
- 🎯 **5 niveles de progreso**: De vacío a completo, con colores visuales intuitivos
- 💾 **Persistencia automática**: Tu progreso se guarda automáticamente en el navegador (localStorage)
- 💬 **Frases motivacionales**: 21 frases diarias inspiradoras para mantener tu motivación
- 🌓 **Modo claro/oscuro**: Soporte automático basado en las preferencias del sistema
- 📱 **Responsive**: Funciona perfectamente en dispositivos móviles, tablets y escritorio
- ♿ **Accesible**: Diseñado con estándares de accesibilidad web (ARIA, navegación por teclado)
- 🖨️ **Print-friendly**: Estilos optimizados para impresión

### 🎮 Cómo usar

1. **Marcar progreso**: Haz clic en cualquier día para cambiar el nivel de cumplimiento
   - Cada clic avanza: Vacío → Leve → Medio → Alto → Completo → Vacío
2. **Atajos de teclado**:
   - `Shift + Click`: Marcar como completo directamente
   - `Alt + Click`: Reiniciar a vacío
3. **Reiniciar todo**: Usa el botón "Reiniciar" para limpiar todo el progreso
4. **Ver frases**: Expande la sección "Frases diarias" para ver todas las motivaciones

## 🚀 Inicio rápido

### Opción 1: Usar la versión en línea (recomendado)

Simplemente visita [la página en GitHub Pages](https://yonatanvazquez.github.io/21dias/)

### Opción 2: Ejecutar localmente

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/yonatanvazquez/21dias.git
   cd 21dias
   ```

2. **Abre el archivo**
   - Simplemente abre `index.html` en tu navegador web
   - O usa un servidor local:
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js (npx)
     npx serve
     
     # Con PHP
     php -S localhost:8000
     ```

## 🛠️ Tecnologías

Este proyecto está construido con tecnologías web estándar:

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Grid, Flexbox, y diseño responsive
- **JavaScript (Vanilla)**: Sin dependencias externas, código limpio y mantenible

## 📁 Estructura del proyecto

```
21dias/
├── index.html          # Página principal
├── 404.html            # Página de error personalizada
├── styles.css          # Estilos principales
├── script.js           # Lógica de la aplicación
├── README.md           # Este archivo
├── CHANGELOG.md        # Historial de versiones
├── LICENSE             # Licencia MIT
└── CONTRIBUTING.md     # Guía para contribuir
```

## 🎨 Niveles de progreso

El sistema utiliza 5 niveles visuales:

| Nivel | Nombre | Color | Descripción |
|-------|--------|-------|-------------|
| 0 | Vacío | Gris | Aún no comenzado |
| 1 | Leve | Azul claro | Ejercicio mínimo |
| 2 | Medio | Azul medio | Ejercicio moderado |
| 3 | Alto | Azul intenso | Buen progreso |
| 4 | Completo | Azul sólido | Día completado al 100% |

## 🔧 Desarrollo

### Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (opcional, para desarrollo)

### Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Diseño inspirado en el estilo visual de GitHub
- Técnicas de UI/UX modernas para una experiencia fluida
- Comunidad de desarrolladores de código abierto

## 📊 Estadísticas

- ⭐ Estrellas del proyecto
- 🍴 Forks
- 👀 Visitas
- 🐛 Issues y Pull Requests

---

<div align="center">

**Hecho con ❤️ para ayudarte a alcanzar tus objetivos**

[⭐ Da una estrella](https://github.com/yonatanvazquez/21dias) si este proyecto te ha sido útil

</div>
