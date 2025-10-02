document.addEventListener('DOMContentLoaded', () => {
    const langToggleButton = document.getElementById('lang-toggle-btn');
    
    // Si el botón no existe, no hacemos nada más.
    if (!langToggleButton) {
        return;
    }

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        if (lang === 'es') {
            langToggleButton.textContent = 'Switch to English';
        } else {
            langToggleButton.textContent = 'Switch to Spanish';
        }
    };

    // Establecer el idioma por defecto al cargar la página.
    setLanguage('en');

    // Añadir el evento de clic al botón.
    langToggleButton.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'es' : 'en';
        setLanguage(newLang);
    });
});
