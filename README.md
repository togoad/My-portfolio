# Portfolio de Adrián Torres · v0.5

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

La web de GitHub Pages es estática. El asistente real usa un Cloudflare Worker para que la clave de OpenAI no aparezca en el código público. El asistente recibe solo las preguntas recientes; el Worker añade un conjunto limitado de datos del portfolio. No habilita búsqueda web y la petición a la API incluye `store: false`.

1. Crea una cuenta de Cloudflare y configura Wrangler en el ordenador. Desde la carpeta `worker/`, inicia sesión con `npx wrangler login`.
2. En `worker/wrangler.jsonc`, cambia `SITE_ORIGIN` por el **origen** de tu página de GitHub Pages, por ejemplo `https://tuusuario.github.io`. Si usas dominio propio, pon ese origen. No añadas la ruta del repositorio ni una barra final.
3. Crea una clave de API de OpenAI y guárdala en el Worker con `npx wrangler secret put OPENAI_API_KEY`. Escribe la clave cuando Wrangler la solicite; no la pegues en el HTML, JavaScript ni en GitHub.
4. Desde `worker/`, publica el backend con `npx wrangler deploy`. El archivo `wrangler.jsonc` configura un límite aproximado de ocho solicitudes por minuto y desactiva el registro de Worker. Revisa y configura los límites de gasto de tu cuenta de API antes de publicarlo.
5. Copia la URL que Wrangler muestra al desplegar y ponla en `window.PORTFOLIO_ASSISTANT_ENDPOINT` dentro de `js/assistant-config.js`, sin añadir `/chat` al final.
6. Sube el contenido de esta carpeta a la raíz de `main` en tu repositorio y configura GitHub Pages para publicar desde `main` y `/(root)`.

El modelo predeterminado es `gpt-6-luna`; puedes cambiar `OPENAI_MODEL` en `worker/wrangler.jsonc` si quieres usar otro modelo disponible para tu cuenta. La API puede generar costes según su uso. No compartas la clave en esta conversación ni la incluyas en el ZIP.

Si el asistente todavía no está desplegado o configurado, la web muestra un aviso y mantiene visibles el currículum y el contacto.

## Actualizar los datos

- Edita `index.html` y `curriculum.html` para actualizar el perfil, los proyectos, la formación o el contacto.
- El Worker contiene los datos que el asistente puede usar, en `worker/src/index.js`, dentro de `PORTFOLIO_FACTS`. Si cambias un dato del portfolio, actualiza también esa lista para que las respuestas coincidan.
- Añade resultados, enlaces o nuevas herramientas a proyectos solo cuando tengas datos concretos para publicarlos.
- El email publicado es `atorgom3001@gmail.com`.
