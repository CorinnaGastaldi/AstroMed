import { enableContinueButton } from './new-booking-functions.js';

window.addEventListener('DOMContentLoaded', loadPerformances);

document.getElementById('search-text').addEventListener('input', handleSearch);

let performances = [];

// Loads the performances from the JSON file in the choice performance page
export async function loadPerformances() {

    const res = await fetch('../data/performances.json');
    performances = await res.json();
    renderPerformances(performances);
}

function renderPerformances(list) {
    const container = document.getElementById('available-performances');
    container.innerHTML = '';

    list.forEach(item => {
        const card = document.createElement('div');
        card.dataset.id = item.id;
        card.className = 'performance-card';

        card.innerHTML = `
            <p class="text-color-black text-body-regular">${item.name}</p>
            <svg class="icon-32 icon-blue check-icon-hidden">
                <use xlink:href="../icons/check-icon.svg#check-icon"></use>
            </svg>
        `;

        container.appendChild(card);
    })
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const filtered = performances.filter(item =>
        item.name.toLowerCase().includes(query)
    );
    renderPerformances(filtered);
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
        if (icon) icon.classList.add('check-icon-hidden');
    }

    // Selects the new card
    card.classList.add('performance-card-selected');
    const selectedIcon = card.querySelector('svg');
    if (selectedIcon) selectedIcon.classList.remove('check-icon-hidden');

    enableContinueButton(true);
});
