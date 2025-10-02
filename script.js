// Fichero: script.js

document.addEventListener('DOMContentLoaded', () => {
    const langToggleButton = document.getElementById('lang-toggle-btn');
    
    // Si el botón no existe en la página, no se hace nada.
    if (!langToggleButton) {
        return;
    }

    // Función que cambia el idioma y actualiza el botón
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        // Guarda la elección del usuario en localStorage
        localStorage.setItem('preferredLang', lang); 
        // Actualiza el texto del botón
        langToggleButton.textContent = (lang === 'en') ? 'Switch to Spanish' : 'Cambiar a Inglés';
    };

    // Al cargar cualquier página, revisa si hay un idioma guardado
    const savedLang = localStorage.getItem('preferredLang');
    
    // Si hay un idioma guardado, úsalo. Si no, usa 'en' por defecto.
    const initialLang = savedLang || 'en';
    setLanguage(initialLang);

    // Evento de clic para cambiar el idioma
    langToggleButton.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = (currentLang === 'en') ? 'es' : 'en';
        setLanguage(newLang);
    });
});
