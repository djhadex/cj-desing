document.addEventListener('DOMContentLoaded', function() {
    const langDropdown = document.getElementById('langDropdown');
    const langItems = document.querySelectorAll('.dropdown-item');
    const langElements = document.querySelectorAll('[data-translate]');

    const translations = {
        'navbar.about': {
            'es': 'Sobre mí',
            'en': 'About me',
            'fr': 'À propos de moi'
        },
        'navbar.projects': {
            'es': 'Proyectos',
            'en': 'Projects',
            'fr': 'Projets'
        },
        'navbar.contact': {
            'es': 'Contacto',
            'en': 'Contact',
            'fr': 'Contact'
        },
        'hero.welcome': {
            'es': 'Bienvenido a mi Portafolio',
            'en': 'Welcome to my Portfolio',
            'fr': 'Bienvenue sur mon Portfolio'
        },
        'hero.description': {
            'es': 'Desarrollador Web Creativo',
            'en': 'Creative Web Developer',
            'fr': 'Développeur Web Créatif'
        },
        'about.title': {
            'es': 'Sobre mí',
            'en': 'About me',
            'fr': 'À propos de moi'
        },
        'about.description': {
            'es': 'Soy un diseñador web emergente con una sólida formación en las últimas tecnologías y tendencias del diseño digital. Mi objetivo es integrarme en un equipo dinámico donde pueda aplicar mis conocimientos y habilidades, contribuyendo con una perspectiva fresca e innovadora al desarrollo de proyectos web.',
            'en': 'I am an emerging web designer with a solid background in the latest digital design technologies and trends. My goal is to join a dynamic team where I can apply my knowledge and skills, contributing a fresh and innovative perspective to web project development.',
            'fr': 'Je suis un designer web émergent avec une solide formation dans les dernières technologies et tendances du design numérique. Mon objectif est de m\'intégrer dans une équipe dynamique où je peux appliquer mes connaissances et compétences, en apportant une perspective fraîche et innovante au développement de projets web.'
        },
        'projects.title': {
            'es': 'Mis Proyectos',
            'en': 'My Projects',
            'fr': 'Mes Projets'
        },
        'contact.title': {
            'es': 'Contáctame',
            'en': 'Contact Me',
            'fr': 'Contactez-moi'
        },
        'contact.name': {
            'es': 'Nombre',
            'en': 'Name',
            'fr': 'Nom'
        },
        'contact.email': {
            'es': 'Email',
            'en': 'Email',
            'fr': 'Email'
        },
        'contact.message': {
            'es': 'Mensaje',
            'en': 'Message',
            'fr': 'Message'
        },
        'contact.send': {
            'es': 'Enviar',
            'en': 'Send',
            'fr': 'Envoyer'
        },
        'skills.html': {
            'es': '• Dominio de HTML5, CSS3 y JavaScript',
            'en': '• Proficiency in HTML5, CSS3 and JavaScript',
            'fr': '• Maîtrise de HTML5, CSS3 et JavaScript'
        },
        'skills.frameworks': {
            'es': '• Experiencia con frameworks modernos como React y Vue.js',
            'en': '• Experience with modern frameworks like React and Vue.js',
            'fr': '• Expérience avec des frameworks modernes comme React et Vue.js'
        },
        'skills.responsive': {
            'es': '• Diseño responsivo y adaptativo',
            'en': '• Responsive and adaptive design',
            'fr': '• Conception responsive et adaptative'
        },
        'skills.uxui': {
            'es': '• Principios de UX/UI y arquitectura de la información',
            'en': '• UX/UI principles and information architecture',
            'fr': '• Principes UX/UI et architecture de l\'information'
        },
        'skills.tools': {
            'es': '• Manejo de herramientas de diseño como Adobe Creative Suite y Figma',
            'en': '• Proficiency in design tools like Adobe Creative Suite and Figma',
            'fr': '• Maîtrise des outils de conception tels qu\'Adobe Creative Suite et Figma'
        },
        'contact.fullname': {
            'es': 'Cristian J. Lucia',
            'en': 'Cristian J. Lucia',
            'fr': 'Cristian J. Lucia'
        },
        'contact.phone': {
            'es': '+34 123 456 789',
            'en': '+34 123 456 789',
            'fr': '+34 123 456 789'
        }
    };

    let currentLang = 'es';

    function updateLanguage(lang) {
        currentLang = lang;
        langDropdown.textContent = lang.toUpperCase();
        
        langElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key] && translations[key][lang]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[key][lang];
                } else {
                    el.textContent = translations[key][lang];
                }
            }
        });
    }

    langItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            updateLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Inicializar en español
    updateLanguage('es');
});