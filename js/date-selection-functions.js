import { enableContinueButton } from './new-booking-functions.js'

document.getElementById('available-date').addEventListener('click', function (event) {
    const selectedDay = document.getElementById('available-date');
    selectedDay.classList.add('single-day-container-selected');

    // Makes the available times container visible
    const timeContainer = document.getElementById('available-times');
    if (timeContainer) {
        timeContainer.classList.remove('d-none');
    }
})

document.getElementById('available-time').addEventListener('click', function (event) {
    const selectedTime = document.getElementById('available-time');

    selectedTime.classList.add('single-time-container-selected');

    // Makes the checked icon visible
    const selectedIcon = selectedTime.children[1]
    if (selectedIcon) selectedIcon.classList.remove('check-icon-hidden');
    
    enableContinueButton(true);
})