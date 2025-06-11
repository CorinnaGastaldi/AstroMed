export function enableContinueButton(selection) {
    const button = document.getElementById('continue-button');

    if (button.disabled) document.getElementById('continue-button').disabled = !selection;
}

window.handleContinue = function (pageUrl) {
    /**
    const selectedCard = document.querySelector('.performance-card-selected');
    if (selectedCard) {
        const id = selectedCard.getAttribute('data-id');
        localStorage.setItem('performance', id);
    }
     **/
    window.location.href = pageUrl;
};
