# Activar el asistente IA

El asistente de la web usa un Cloudflare Worker y la API de OpenAI. Para terminar la conexión necesitas iniciar sesión en tus propias cuentas de Cloudflare y OpenAI. No compartas la clave de API en esta conversación ni la guardes en los archivos de la web.

## 1. Desplegar el Worker

Este proyecto ya tiene el origen correcto de la web en `worker/wrangler.jsonc`: `https://togoad.github.io`. No añadas `/My-portfolio/`.

Abre una terminal dentro de esta carpeta `worker/` y ejecuta:

```bash
npx wrangler login
npx wrangler deploy
```

Inicia sesión en Cloudflare desde el navegador. Al terminar, guarda la dirección que Wrangler muestra; tendrá formato `https://portfolio-adrian-assistant.<tu-subdominio>.workers.dev`.

## 2. Guardar la clave de OpenAI en Cloudflare

Crea una clave en [OpenAI API Keys](https://platform.openai.com/api-keys). Luego, desde la misma carpeta `worker/`, ejecuta:

```bash
npx wrangler secret put OPENAI_API_KEY
```

Pega la clave solo cuando la terminal la solicite. Wrangler la guarda como secreto en Cloudflare y publica una nueva versión del Worker. Nunca la pongas en HTML, JavaScript, `wrangler.jsonc`, GitHub o este ZIP.

## 3. Enlazar la web con el Worker

Abre `js/assistant-config.js` y sustituye la cadena vacía por la URL que te dio Wrangler, sin añadir `/chat`:

```js
window.PORTFOLIO_ASSISTANT_ENDPOINT = "https://portfolio-adrian-assistant.<tu-subdominio>.workers.dev";
```

Sube el archivo actualizado a la raíz de `main` en el repositorio `togoad/My-portfolio`. Espera a que GitHub Pages publique el cambio y recarga `https://togoad.github.io/My-portfolio/`.

## 4. Probarlo

Abre «Pregúntale a mi portfolio» y prueba una pregunta sobre Adrián. Si aparece un error, revisa los logs del Worker en Cloudflare. No compartas capturas que muestren la clave.

## Costes

El uso de la API de OpenAI se factura por separado de la suscripción de ChatGPT y depende del uso. Revisa la facturación y configura límites o alertas antes de habilitar el servicio.
