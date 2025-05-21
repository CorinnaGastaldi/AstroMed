function openALSettings(type) {
    debugger
    const alSection = document.getElementById("al-section")
    const alLanguage = document.getElementById("language-settings")
    const alAccessibility = document.getElementById("accessibility-settings")

    alSection.classList.remove("d-none");
    if(type === "language")
        alLanguage.classList.remove("d-none");
    else
        alAccessibility.classList.remove("d-none");
}

function closeALSettings() {
    const alSection = document.getElementById("al-section")
    const alLanguage = document.getElementById("language-settings")
    const alAccessibility = document.getElementById("accessibility-settings")

    alSection.classList.add("d-none");
    alLanguage.classList.add("d-none");
    alAccessibility.classList.add("d-none");
}