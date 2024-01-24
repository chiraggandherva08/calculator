const invest_ = document.querySelector('#return');
const years_ = document.querySelector('#years');
const percentage_ = document.querySelector('#percentage');

invest_.addEventListener('change', () => {
    document.querySelector('#rupee').value = `₹${invest_.value}`;
    document.querySelectorAll('#result h2')[0].innerHTML = `₹${(invest_.value) * (years_.value) * 12}`;
})

years_.addEventListener('change', () => {
    document.querySelector('#years_val').value = `${years_.value} Years`;
    document.querySelectorAll('#result h2')[0].innerHTML = `₹${(invest_.value) * (years_.value) * 12}`;
})

percentage_.addEventListener('change', () => {
    document.querySelector('#percentage_val').value = `${percentage_.value}%`;
    const I = percentage_.value / 1200;
    const total = parseInt(years_.value * 12 * (Math.pow(I + 1, years_.value*12)) * (I + 1) / (I));
    document.querySelectorAll('#result h2')[1].innerHTML = total;
})



document.querySelector('#rupee').addEventListener('change', () => {
    invest_.value = document.querySelector('#rupee').value;
    document.querySelector('#rupee').value = `₹${invest_.value}`;
})

document.querySelector('#years_val').addEventListener('change', () => {
    years_.value = document.querySelector('#years_val').value;
    document.querySelector('#years_val').value = `${years_.value} Years`;
})

document.querySelector('#percentage_val').addEventListener('change', () => {
    percentage_.value = document.querySelector('#percentage_val').value;
    document.querySelector('#percentage_val').value = `${percentage_.value}%`;
})