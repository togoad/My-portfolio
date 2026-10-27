# Portfolio de Adrián Torres · v0.4

Portfolio personal para presentar formación, conocimientos, experiencia práctica, proyectos y vías de contacto. Está creado con HTML, CSS y JavaScript nativos, preparado para publicarse directamente con GitHub Pages.

## Contenido

```text
portfolio-adrian-futurista/
├── index.html              # Presentación, perfil y proyectos
├── curriculum.html         # Currículum online, certificaciones y portfolio
├── assets/
│   ├── favicon.svg
│   └── profile-placeholder.svg
├── css/styles.css
├── js/main.js
└── .nojekyll
```

## Preferencias

- La página abre en modo claro. En **Ajustes** se puede cambiar entre claro y oscuro.
- El mismo menú permite cambiar el idioma entre español e inglés y activar o desactivar las animaciones.
- Las preferencias se guardan en el navegador del visitante.
- El apartado de certificaciones de programación indica que actualmente no hay ninguna.
- El currículum se consulta en línea desde `curriculum.html`; no se ofrece como descarga.

## Actualizar el contenido

- Edita `index.html` para actualizar el perfil, los proyectos, la formación o el contacto.
- Edita `curriculum.html` para actualizar la trayectoria, las certificaciones y las fichas de proyectos.
- Puedes duplicar una ficha `<article class="case-study">` dentro de `#portfolio` para añadir un proyecto. Añade ejemplos concretos, herramientas, resultados y enlaces públicos cuando estén disponibles.
- Sustituye `assets/profile-placeholder.svg` si quieres añadir una imagen personal y ajusta su texto alternativo en el HTML.
- El correo publicado es `atorgom3001@gmail.com`.

## Publicar con GitHub Pages

1. Sube el **contenido** de esta carpeta a la raíz de la rama `main` del repositorio. `index.html`, `curriculum.html`, `assets/`, `css/` y `js/` deben quedar directamente en esa raíz.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`. Guarda los cambios.
4. Espera a que termine el despliegue. GitHub mostrará la dirección de la web en esa misma página.

No necesita dependencias ni compilación. También puedes abrir `index.html` directamente para ver una versión local.
