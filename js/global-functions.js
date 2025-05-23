// Opens the Language and Accessibility settings
function openALSettings(type) {
    const alSection = document.getElementById("al-section")
    const alLanguage = document.getElementById("language-settings")
    const alAccessibility = document.getElementById("accessibility-settings")

    alSection.classList.remove("d-none");
    if(type === "language")
        alLanguage.classList.remove("d-none");
    else
        alAccessibility.classList.remove("d-none");
}

// Closes the Language and Accessibility settings
function closeALSettings() {
    const alSection = document.getElementById("al-section")
    const alLanguage = document.getElementById("language-settings")
    const alAccessibility = document.getElementById("accessibility-settings")

    alSection.classList.add("d-none");
    alLanguage.classList.add("d-none");
    alAccessibility.classList.add("d-none");
}

// Opens and closes the sidebar
function toggleNav() {
    // Toggle text
    const elementi = document.querySelectorAll('.nav-pill-text');
    elementi.forEach(el => {
        el.classList.toggle('hide-nav-text');
    });

    // Toggle icons
    const iconClose = document.getElementById('side-close');
    const iconOpen = document.getElementById('side-open');

    iconClose.classList.toggle('d-none');
    iconOpen.classList.toggle('d-none');
}