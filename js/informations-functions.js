window.addEventListener('DOMContentLoaded', loadDepartments);

let departments = [];

// Loads the performances from the JSON file in the information page
export async function loadDepartments() {
    const res = await fetch('../data/departments.json');
    departments = await res.json();
    renderDepartments(departments);
}

/*
function renderDepartments(list) {
    const container = document.getElementById('departments-container');
    container.innerHTML = '';

    for (let i = 0; i < list.length; i += 3) {
        const row = document.createElement('div');
        row.className = 'row gap-3 mb-3 gx-0';

        list.slice(i, i + 3).forEach(info => {
            const col = document.createElement('a');
            col.className = 'col department-container';
            col.setAttribute('data-type', info.category);
            col.setAttribute('id', info.id);
            if(info.url)
                col.setAttribute('href', info.url);

            col.innerHTML = `
              <div class="d-flex flex-column">
                <p class="text-title-3 text-color-black">${info.name}</p>
                <p class="text-body-caption text-color-dark-grey">${info.category}</p>
              </div>
              <div class="d-flex flex-row gap-2 align-items-center">
                <img src="icons/pointer-icon.svg" alt="Pointer icon" width="24px" height="24px">
                <p class="text-body-regular text-color-dark-grey">
                    ${info.location.floor} - ${info.location.entrance}
                </p>
              </div>`;

            row.appendChild(col);
        });

        container.appendChild(row);
    }
    setupCategoryFilters();
}
 */

function renderDepartments(list) {
    const container = document.getElementById('departments-container');
    container.innerHTML = '';

    list.forEach(info => {
        const col = document.createElement('a');
        col.className = 'department-container';
        col.setAttribute('data-type', info.category);
        col.setAttribute('id', info.id);
        if (info.url)
            col.setAttribute('href', info.url);

        col.innerHTML = `
          <div class="d-flex flex-column">
            <p class="text-title-3 text-color-black">${info.name}</p>
            <p class="text-body-caption text-color-dark-grey">${info.category}</p>
          </div>
          <div class="d-flex flex-row gap-2 align-items-center">
            <img src="icons/pointer-icon.svg" alt="Pointer icon" width="24px" height="24px">
            <p class="text-body-regular text-color-dark-grey">
              ${info.location.floor} - ${info.location.entrance}
            </p>
          </div>
        `;

        container.appendChild(col);
    });

    setupCategoryFilters();
}

function setupCategoryFilters() {
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-button').forEach(btn =>
                btn.classList.remove('category-button-active')
            );
            button.classList.add('category-button-active');

            const category = button.getAttribute('data-category');

            document.querySelectorAll('.department-container').forEach(dep => {
                const type = dep.getAttribute('data-type');
                dep.style.display = (category === 'all' || type === category) ? 'flex' : 'none';
            });
        });
    });
}