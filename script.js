// Aseguramos que GSAP y ScrollTrigger estén registrados si existen
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// ---------- 1. ESTELA DE CÍRCULOS (MOUSE) ----------
document.addEventListener("DOMContentLoaded", function() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
  
    // Si no hay círculos en el HTML, el script se detiene aquí para no dar error
    if (circles.length === 0) return;

    // Colores cálidos (naranjas/rojos)
    const colors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
      "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
      "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
      "#950f5f", "#830060", "#7c0060", "#680060", "#60005f"
    ];
  
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
  
    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
    });
  
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px"; 
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;
  
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      requestAnimationFrame(animateCircles);
    }
    animateCircles();
});


// ---------- 2. CURSOR BASE (Puntito) ----------
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Protegemos el código: solo se ejecuta si encuentra el cursor en el HTML
if (cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const interactiveElements = document.querySelectorAll('a, .project, .service-card, .cta-button, .submit-magnetic, input, textarea, .magnetic-btn, .glitch-text');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
            follower.style.transform = 'scale(1.8)';
            follower.style.borderColor = 'rgba(255,255,255,0.8)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
            follower.style.borderColor = 'rgba(255,255,255,0.4)';
        });
    });
}


// ---------- 3. BOTONES MAGNÉTICOS ----------
const magneticBtns = document.querySelectorAll('.magnetic-btn, .submit-magnetic');
if (magneticBtns.length > 0) {
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const moveX = (x - rect.width/2) * 0.15;
            const moveY = (y - rect.height/2) * 0.15;
            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });
}


// ---------- 4. SCROLL SUAVE Y MENÚ ACTIVO ----------
const navMenu = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-link');

function getNavbarHeight() { 
    return navMenu ? navMenu.offsetHeight : 0; 
}

// Marcar menú como activo al bajar
function activateMenuOnScroll() {
    if (sections.length === 0 || navLinksItems.length === 0) return;
    
    let current = '';
    const navbarHeight = getNavbarHeight();
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
}

window.addEventListener('scroll', activateMenuOnScroll);
window.addEventListener('load', activateMenuOnScroll);


// ---------- 5. ANIMACIONES GSAP (SOLO SI EXISTE GSAP Y HAY ELEMENTOS) ----------
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    
    const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    if (fadeElements.length > 0) {
        fadeElements.forEach(elem => {
            let xVal = 0, yVal = 0;
            if (elem.classList.contains('fade-up')) yVal = 60;
            if (elem.classList.contains('fade-left')) xVal = -60;
            if (elem.classList.contains('fade-right')) xVal = 60;
            
            gsap.fromTo(elem, { opacity: 0, x: xVal, y: yVal }, {
                opacity: 1, x: 0, y: 0, duration: 1.5, ease: "power3.out",
                scrollTrigger: { 
                    trigger: elem, 
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            });
        });
    }

    const heroTitle = document.querySelector('.hero-left h1');
    const heroParagraph = document.querySelector('.hero-left p');
    const heroButton = document.querySelector('.hero-left .cta-button');
    const logo = document.querySelector('.logo');

    if (heroTitle) gsap.fromTo(heroTitle, { opacity: 0, y: 100, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 1.6, delay: 0.3, ease: "back.out(1.2)" });
    if (heroParagraph) gsap.fromTo(heroParagraph, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.4, delay: 0.6, ease: "power3.out" });
    if (heroButton) gsap.fromTo(heroButton, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.9, ease: "power3.out" });
    if (logo) gsap.fromTo(logo, { opacity: 0, scale: 0.95, filter: "blur(4px)", y: -20 }, { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 1.2, delay: 0.2, ease: "back.out(1)" });

    window.addEventListener('load', () => { ScrollTrigger.refresh(); });
    window.addEventListener('resize', () => { ScrollTrigger.refresh(); });
}


// ---------- 6. LIGHTBOX PARA PROYECTOS CON ZOOM TÁCTIL ----------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const projectContainers = document.querySelectorAll('.project-img');

if(lightbox && projectContainers.length > 0) {
    // Variables para el control del zoom y el paneo
    let scale = 1;
    let panning = false;
    let pointX = 0;
    let pointY = 0;
    let startX = 0;
    let startY = 0;

    // Resetear las transformaciones
    function resetTransform() {
        scale = 1;
        pointX = 0;
        pointY = 0;
        lightboxImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    // Abrir Lightbox
    projectContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            const linkUrl = container.getAttribute('href');
            if (linkUrl) {
                return;
            }

            const imgTarget = container.querySelector('img');
            if(imgTarget) {
                lightboxImg.src = imgTarget.src;
                resetTransform(); // Resetea el zoom al abrir
                lightbox.classList.add('active');
            }
        });
    });

    // Cerrar Lightbox (Boton y clic fuera)
    if(lightboxClose){
        lightboxClose.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se cierre y vuelva a abrir por error
            lightbox.classList.remove('active');
            resetTransform();
        });
    }

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            lightbox.classList.remove('active');
            resetTransform();
        }
    });

    // --- LÓGICA DE PINCH TO ZOOM Y PANEO PARA MÓVILES ---
    let initialDistance = 0;

    // Calcula la distancia entre dos dedos
    function getDistance(e) {
        return Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
    }

    // Inicio del toque (1 dedo para mover, 2 para zoom)
    lightboxImg.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            // Dos dedos = inicio de zoom
            initialDistance = getDistance(e);
        } else if (e.touches.length === 1 && scale > 1) {
            // Un dedo + zoom aplicado = inicio de paneo (arrastrar)
            panning = true;
            startX = e.touches[0].pageX - pointX;
            startY = e.touches[0].pageY - pointY;
        }
    }, { passive: false });

    // Movimiento del toque
    lightboxImg.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Evita que la página intente scrollear

        if (e.touches.length === 2) {
            // Pinch-to-zoom
            const currentDistance = getDistance(e);
            // Calculamos el cambio de escala basado en la distancia inicial
            const newScale = scale * (currentDistance / initialDistance);
            
            // Limitamos el zoom (mínimo 1x, máximo 4x)
            scale = Math.min(Math.max(1, newScale), 4);
            
            lightboxImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
            initialDistance = currentDistance; // Actualizamos la distancia base para el siguiente frame

        } else if (e.touches.length === 1 && panning && scale > 1) {
            // Paneo (arrastrar la imagen ampliada)
            pointX = e.touches[0].pageX - startX;
            pointY = e.touches[0].pageY - startY;
            lightboxImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
        }
    }, { passive: false });

    // Fin del toque
    lightboxImg.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) {
            initialDistance = 0;
        }
        if (e.touches.length === 0) {
            panning = false;
        }
    });
}


// ---------- 7. PROYECTOS: BOTÓN "VER MÁS / VER MENOS" ----------
const portfolioToggle = document.getElementById('portfolio-toggle');
const portfolioMore = document.getElementById('portfolio-more');

if (portfolioToggle && portfolioMore) {
    const toggleLabel = portfolioToggle.querySelector('.portfolio-toggle__text');

    const setPortfolioState = (open) => {
        portfolioMore.classList.toggle('open', open);
        portfolioMore.setAttribute('aria-hidden', String(!open));
        if (open) portfolioMore.removeAttribute('inert');
        else portfolioMore.setAttribute('inert', '');
        portfolioToggle.setAttribute('aria-expanded', String(open));
        if (toggleLabel) toggleLabel.textContent = open ? 'Ver menos' : 'Ver más proyectos';
    };

    portfolioToggle.addEventListener('click', () => {
        const willOpen = !portfolioMore.classList.contains('open');
        setPortfolioState(willOpen);

        // Al cambiar el alto de la página, recalculamos las animaciones de scroll
        setTimeout(() => {
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        }, 750);

        // Al cerrar, mantenemos el botón a la vista
        if (!willOpen) {
            setTimeout(() => portfolioToggle.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
        }
    });
}
