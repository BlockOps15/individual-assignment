const input = document.querySelector('#search');
const rows = document.querySelectorAll('tbody tr');

input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    rows.forEach(row => {
        const cell = row.querySelector('td:first-child');
        const word = cell.textContent.toLowerCase();

        if (value && word.includes(value)) {
            row.style.display = '';
            cell.innerHTML = cell.textContent.replace(
                new RegExp(value, 'gi'),
                match => `<strong>${match}</strong>`
            );
        } else if (!value) {
            row.style.display = '';
            cell.innerHTML = cell.textContent;
        } else {
            row.style.display = 'none';
            cell.innerHTML = cell.textContent;
        }
    });
});