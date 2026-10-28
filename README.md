# Portfolio de Adrián Torres · v5.1

Portfolio personal para presentar formación, experiencia práctica, conocimientos, proyectos y vías de contacto. Está hecho con HTML, CSS y JavaScript y se publica en GitHub Pages. Esta versión añade un resumen dirigido a empresas y un asistente que responde sobre la información publicada en el portfolio.

## Contenido

```text
portfolio-adrian-futurista/
├── index.html              # Presentación, proyectos y resumen para empresas
├── curriculum.html         # Currículum online, certificaciones y portfolio
├── assets/
├── css/styles.css
├── js/
│   ├── main.js
│   └── assistant-config.js # URL pública del backend del asistente
├── worker/
│   ├── wrangler.jsonc
│   └── src/index.js        # Backend seguro para el asistente IA
└── .nojekyll
```

## Preferencias de la web

- En **Ajustes** se puede elegir modo claro u oscuro, español o inglés, y activar o desactivar las animaciones. La página abre en modo claro.
- El currículum se consulta en línea; no se ofrece como descarga.
- La sección de certificaciones de programación indica que actualmente no hay ninguna.

## Activar el asistente IA

El panel ya está en la web, pero la IA necesita un backend. GitHub Pages solo publica el frontend; el Worker de Cloudflare mantiene la clave de OpenAI fuera del código público. Sigue la guía completa en [ACTIVAR-IA.md](ACTIVAR-IA.md).

La clave se guarda como secreto de Cloudflare y no debe aparecer en el ZIP, en JavaScript ni en GitHub. La API de OpenAI tiene facturación separada de ChatGPT; revisa los límites de gasto antes de activarla.

En esta versión, `SITE_ORIGIN` ya está configurado para `https://togoad.github.io`. La dirección del Worker en `js/assistant-config.js` permanece vacía hasta que Cloudflare te asigne una URL.

## Actualizar los datos

- Edita `index.html` y `curriculum.html` para actualizar el perfil, los proyectos, la formación o el contacto.
- El Worker contiene los datos que el asistente puede usar, en `worker/src/index.js`, dentro de `PORTFOLIO_FACTS`. Si cambias un dato del portfolio, actualiza también esa lista para que las respuestas coincidan.
- Añade resultados, enlaces o nuevas herramientas a proyectos solo cuando tengas datos concretos para publicarlos.
- El email publicado es `atorgom3001@gmail.com`.
