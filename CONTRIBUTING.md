# Guía de Contribución

¡Gracias por tu interés en contribuir a Reto 21 Días! 🎉

Este documento proporciona guías y estándares para contribuir al proyecto.

## 📋 Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y acogedor para todos.

## 🤔 ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug:

1. **Verifica que no haya sido reportado**: Busca en los [Issues](https://github.com/yonatanvazquez/21dias/issues)
2. **Crea un nuevo issue**: Si no existe, crea uno con:
   - Un título claro y descriptivo
   - Descripción detallada del problema
   - Pasos para reproducir
   - Comportamiento esperado vs. actual
   - Capturas de pantalla si es aplicable
   - Información del navegador y sistema operativo

### Sugerir Mejoras

1. **Verifica que no haya sido sugerido**: Revisa los Issues existentes
2. **Crea un issue de feature request**: Describe:
   - La funcionalidad que te gustaría ver
   - Por qué sería útil
   - Posibles implementaciones (opcional)

### Contribuir con Código

#### Proceso

1. **Fork el repositorio**
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   # o
   git checkout -b fix/nombre-del-bug
   ```

3. **Haz tus cambios**:
   - Sigue el estilo de código existente
   - Añade comentarios cuando sea necesario
   - Prueba tus cambios en múltiples navegadores

4. **Commit tus cambios**:
   ```bash
   git commit -m "Add: descripción de tu feature"
   ```
   Usa mensajes de commit claros y descriptivos.

5. **Push a tu fork**:
   ```bash
   git push origin feature/nombre-de-tu-feature
   ```

6. **Abre un Pull Request**:
   - Describe claramente tus cambios
   - Menciona cualquier issue relacionado
   - Espera la revisión

#### Estándares de Código

- **HTML**: Usa indentación consistente (2 espacios)
- **CSS**: 
  - Usa las variables CSS existentes cuando sea posible
  - Sigue la estructura de BEM o similar
  - Comenta secciones importantes
- **JavaScript**:
  - Usa `const` y `let`, evita `var`
  - Añade JSDoc a las funciones
  - Mantén funciones pequeñas y enfocadas

#### Estructura de Commits

Prefija tus commits con:
- `Add:` para nuevas funcionalidades
- `Fix:` para correcciones de bugs
- `Update:` para actualizaciones
- `Refactor:` para refactorizaciones
- `Docs:` para documentación
- `Style:` para cambios de formato
- `Test:` para tests

Ejemplos:
```
Add: keyboard shortcuts for quick actions
Fix: localStorage not saving on Firefox
Update: README with new screenshots
Refactor: extract utility functions
```

### Documentación

Las mejoras en la documentación son muy valiosas:
- Corregir typos
- Clarificar instrucciones
- Añadir ejemplos
- Mejorar traducciones

## 🧪 Testing

Antes de enviar un PR, prueba tu código en:
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (si es posible)
- [ ] Edge (si es posible)
- [ ] Dispositivos móviles (responsive)

## ✅ Checklist para Pull Requests

- [ ] Mi código sigue los estándares del proyecto
- [ ] He probado mis cambios en múltiples navegadores
- [ ] He actualizado la documentación si es necesario
- [ ] Mis commits tienen mensajes claros y descriptivos
- [ ] No he introducido nuevos warnings o errores
- [ ] He actualizado el CHANGELOG.md si aplica

## 📝 Preguntas

Si tienes preguntas, abre un issue con la etiqueta `question`.

## 🙏 Agradecimientos

¡Gracias por tomarte el tiempo de contribuir! Cada contribución, sin importar el tamaño, es valiosa.

---

**¿Necesitas ayuda?** Abre un issue y te ayudaremos lo antes posible.

