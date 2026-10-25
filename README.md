<div align="center">

# 💼 Portafolio — Benjamín Alonso Medina Medel

**Sitio web personal de desarrollo web y diseño digital, con animaciones interactivas, portafolio de proyectos expandible y formulario de contacto.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Android%20%7C%20iOS%20%7C%20PC-22c55e)

[**🔗 Ver sitio en vivo → benjaminmedina.cl**](https://benjaminmedina.cl)

</div>

---

<!--
  💡 Tip: agrega aquí una captura del sitio.
  1) Crea la carpeta docs/ y sube una imagen, por ejemplo docs/preview.png
  2) Descomenta la línea de abajo:
  <p align="center"><img src="docs/preview.png" alt="Vista previa del portafolio" width="800"></p>
-->

## 🎯 Objetivo

Presentar mis servicios y proyectos de forma clara y memorable, y facilitar que potenciales clientes me contacten. El sitio está pensado como una carta de presentación profesional: rápido, visualmente cuidado y con interacciones que muestran dominio de front-end.

## ✨ Funcionalidades

- **Animaciones con GSAP + ScrollTrigger**: entradas por scroll (`fade-up`, `fade-left`, `fade-right`) y animación de apertura del hero.
- **Cursor personalizado** con seguidor suave y **estela de círculos** que sigue al mouse.
- **Botones magnéticos** que reaccionan a la posición del cursor.
- **Menú con sección activa**: resalta en qué parte de la página estás mientras haces scroll.
- **Portafolio de proyectos** con efecto *hover* (la tarjeta revela la captura del proyecto).
- **Botón "Ver más proyectos"**: despliega y oculta proyectos adicionales con animación, accesible y sin recargar la página.
- **Lightbox con zoom táctil**: ampliar capturas con *pinch-to-zoom* y arrastre en celulares.
- **Formulario de contacto** (FormSubmit) con consentimiento de privacidad y respuesta automática.
- **Botón flotante de WhatsApp** con mensaje prellenado.
- **Página de política de privacidad.**
- **SEO y redes sociales**: metadatos, Open Graph y favicon SVG embebido.
- **Responsivo**: adaptado a celular, tablet y escritorio.

## 🛠️ Tecnologías

| Área | Herramientas |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 puro (Grid, Flexbox, variables, transiciones, `backdrop-filter`, media queries) |
| Lógica | JavaScript vanilla (ES6+, eventos táctiles, `requestAnimationFrame`) |
| Animación | [GSAP 3.12.5](https://gsap.com/) + ScrollTrigger (vía CDN) |
| Tipografía | Inter y Great Vibes (Google Fonts) |
| Formulario | [FormSubmit](https://formsubmit.co/) (sin backend propio) |
| Analítica | Google Analytics 4 |
| Hosting | Vercel |

No requiere instalación ni proceso de compilación (*build*): es un sitio estático.

## 🧠 Decisiones técnicas

- **Sin frameworks**: para un sitio de presentación prioricé control total sobre las animaciones y cero dependencias de build.
- **Rendimiento en animaciones**: el movimiento del cursor y la estela usan `requestAnimationFrame` en lugar de temporizadores, y GSAP gestiona las animaciones de scroll.
- **Accesibilidad del botón "Ver más"**: usa `aria-expanded`, `aria-controls` y el atributo `inert` para que el contenido oculto no sea alcanzable con teclado ni lector de pantalla. Respeta `prefers-reduced-motion`.
- **Animación de altura sin JavaScript**: el despliegue usa una transición de `grid-template-rows` (`0fr → 1fr`), evitando medir alturas a mano.
- **Experiencia táctil**: el lightbox implementa *pinch-to-zoom* y paneo con eventos `touch`, con límites de zoom entre 1x y 4x.
- **Transparencia legal**: la política de privacidad declara los servicios de terceros realmente usados (FormSubmit, Google Analytics, Vercel y Cloudflare).

## 📁 Estructura

```
├── index.html          # Página principal
├── privacidad.html     # Política de privacidad
├── style.css           # Estilos y diseño responsivo
├── script.js           # Cursor, animaciones GSAP, lightbox, "ver más"
├── *.png               # Capturas de los proyectos
├── *.mp4               # Videos decorativos (hero y "sobre mí")
└── preview-*.svg       # Vistas previas vectoriales
```


## ➕ Cómo agregar un proyecto

1. Sube la captura (por ejemplo `mi-proyecto.png`) a la raíz del proyecto.
2. En `index.html`, dentro de `#portfolio-more`, copia la **plantilla** que está comentada y reemplaza los textos, imágenes y enlace.
3. Si quieres que aparezca en "Proyectos destacados", pega la tarjeta dentro del primer `portfolio-grid`.

## 🔐 Privacidad

- El repositorio **no contiene claves, contraseñas ni datos de terceros**.
- Los datos de contacto que aparecen (correo profesional, WhatsApp, redes) son los mismos que se muestran públicamente en el sitio.
- Las capturas de proyectos usan datos de demostración. El proyecto "Intranet Juzgado" se muestra solo como captura de su página de inicio, sin información de casos ni de personas.
- El formulario envía los datos a FormSubmit; ninguna información se guarda en este repositorio.

## 👤 Autor

**Benjamín Alonso Medina Medel** — Concepción, Chile
[LinkedIn](https://www.linkedin.com/in/benjamin-alonso-medina-medel-56b9a23b6) · [Instagram](https://instagram.com/bnjmn.mdn) · contacto@benjaminmedina.cl

---

<sub>Proyecto de portafolio personal. Todos los derechos reservados.</sub>
