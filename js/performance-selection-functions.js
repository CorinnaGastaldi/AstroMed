import { enableContinueButton } from './new-booking-functions.js';

window.addEventListener('DOMContentLoaded', loadPerformances);

// Loads the performances from the JSON file in the choice performance page
export async function loadPerformances() {
    try {
        const res = await fetch('../data/performances.json');
        const performances = await res.json();

        const container = document.getElementById('available-performances');
        container.innerHTML = '';

        performances.forEach(item => {
            const card = document.createElement('div');
            card.className = 'performance-card';

            card.innerHTML = `
        <p class="text-color-black text-body-regular">${item.name}</p>
        <svg class="icon-32 icon-blue d-none">
          <use xlink:href="../icons/check-icon.svg#check-icon"></use>
        </svg>  
      `;

            container.appendChild(card);
        });
    } catch (err) {
        console.error('Errore nel caricamento delle prestazioni:', err);
    }
}

// Updates the selected performance card in the choice performance page
document.getElementById('available-performances').addEventListener('click', function (event) {
    const card = event.target.closest('.performance-card');
    if (!card) return;

    //Get the previously selected card
    const previousSelected = document.querySelector('.performance-card-selected');
    if (previousSelected) {
        previousSelected.classList.remove('performance-card-selected');
        const icon = previousSelected.querySelector('svg');
        if (icon) icon.classList.add('d-none');
    }

    // Selects the new card
    card.classList.add('performance-card-selected');
    const selectedIcon = card.querySelector('svg');
    if (selectedIcon) selectedIcon.classList.remove('d-none');

    enableContinueButton(true);
});