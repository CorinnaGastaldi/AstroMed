import { enableContinueButton } from './new-booking-functions.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('continue-button').addEventListener('click', () => {
        handleContinue('new-booking-visit-report.html');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('acceptance');
    const icon = document.getElementById('checkbox-icon');

    if (checkbox && icon) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                icon.src = '../icons/checkbox-checked-icon.svg';
            } else {
                icon.src = '../icons/checkbox-unchecked-icon.svg';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('payment-method-selected');
                const icon = m.querySelector('svg');
                if (icon) icon.classList.add('check-icon-hidden');
            });

            method.classList.add('payment-method-selected');
            const icon = method.querySelector('svg');
            if (icon) icon.classList.remove('check-icon-hidden');

            checkContinueButtonState();
        });
    });

    const checkbox = document.getElementById('acceptance');
    if (checkbox) {
        checkbox.addEventListener('change', checkContinueButtonState);
    }
});

//Enables and disables continue button
function checkContinueButtonState() {
    const selectedMethod = document.querySelector('.payment-method.payment-method-selected');
    const checkbox = document.getElementById('acceptance');
    const continueButton = document.getElementById('continue-button');

    if (selectedMethod && checkbox?.checked) {
        continueButton.removeAttribute('disabled');
        enableContinueButton(true);
    } else {
        continueButton.setAttribute('disabled', 'true');
        enableContinueButton(false);
    }
}

