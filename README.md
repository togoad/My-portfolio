# Portfolio de Adrián Torres

Portfolio web personal de Adrián Torres, estudiante de ASIR en el IES Medina Azahara (Córdoba). Presenta su perfil, formación, experiencia práctica con sistemas y redes, certificaciones e información de contacto. Está construido con HTML, CSS y JavaScript nativos y se puede publicar directamente en GitHub Pages.

## Archivos

```text
portfolio-profesional/
├── index.html              # Página de presentación y selección de proyectos
├── curriculum.html         # Currículum online y fichas de proyecto
├── assets/
│   ├── favicon.svg
│   └── profile-placeholder.svg
├── css/styles.css
├── js/main.js
└── .nojekyll
```

## Personalizar el contenido

- El contenido actual recoge la formación, sistemas operativos, configuración de redes, idiomas y experiencia que Adrián ha indicado.
- En `index.html` puedes actualizar la presentación y las tarjetas de proyectos.
- En `curriculum.html`, duplica un bloque `<article class="case-study">` dentro de `#portfolio` para añadir más proyectos o trabajos técnicos. Incluye el área, tu aportación, las herramientas, el resultado y enlaces públicos válidos cuando los tengas.
- Si quieres más detalle, añade el nombre oficial y las fechas de las certificaciones de Packet Tracer y los nombres de las herramientas concretas que utilizaste.
- El apartado de certificaciones tiene categorías separadas para titulaciones y certificaciones generales, y para programación. Añade tus datos en la categoría que corresponda.
- Puedes sustituir `assets/profile-placeholder.svg` por una fotografía personal y actualizar su ruta y texto alternativo en `index.html`.
- El email actual es `atorgom3001@gmail.com`. Cámbialo si prefieres publicar otra dirección.

El currículum se consulta en `curriculum.html`; no se ofrece como descarga. El contacto abre un mensaje de correo y no necesita servidor.

## Publicar con GitHub Pages

1. Sube el **contenido** de esta carpeta a la raíz de la rama `main` del repositorio. `index.html`, `curriculum.html`, `assets/`, `css/` y `js/` deben quedar directamente en esa raíz.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`. Guarda los cambios.
4. Espera a que termine el despliegue. GitHub mostrará la dirección de la web en esa misma página.

No necesita instalar dependencias ni compilar. También puedes abrir `index.html` directamente para ver una vista local.
