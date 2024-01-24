const invest_ = document.querySelector('#return');
const years_ = document.querySelector('#years');
const percentage_ = document.querySelector('#percentage');


invest_.style.background = 'linear-gradient(90deg, rgb(208, 31, 75) 0%, rgb(191, 191, 191) 0%)';
years_.style.background = 'linear-gradient(90deg, rgb(208, 31, 75) 0%, rgb(191, 191, 191) 0%)';
percentage_.style.background = 'linear-gradient(90deg, rgb(208, 31, 75) 0%, rgb(191, 191, 191) 0%)';

document.querySelector('#rupee').value = `₹5000`;
document.querySelector('#years_val').value = `Year: 1`;
document.querySelector('#percentage_val').value = `8%`;


invest_.oninput = function() {
    document.querySelector('#rupee').value = `₹${invest_.value}`;
    document.querySelectorAll('#result h2')[0].innerHTML = `₹${(invest_.value) * (years_.value) * 12}`;

    const total = invest_.value * (Math.pow(1 + percentage_.value / 1200, 12 * years_.value) - 1) / (percentage_.value / 1200);
    document.querySelectorAll('#result h2')[1].innerHTML = `₹${Math.ceil(total)}`;
}
invest_.addEventListener('mousemove', () => {
    const x = invest_.value;
    invest_.style.background = 'linear-gradient(90deg, rgb(208, 31, 75)' + x/5000 + '%, rgb(191, 191, 191)' +  x/5000 + '%)';
})
document.querySelector('#rupee').addEventListener('change', () => {
    invest_.value = document.querySelector('#rupee').value;
    document.querySelector('#rupee').value = `₹${invest_.value}`;
})



years_.oninput = () => {
    document.querySelector('#years_val').value = `Years: ${years_.value}`;
    document.querySelectorAll('#result h2')[0].innerHTML = `₹${(invest_.value) * (years_.value) * 12}`;

    const total = invest_.value * (Math.pow(1 + percentage_.value / 1200, 12 * years_.value) - 1) / (percentage_.value / 1200);
    document.querySelectorAll('#result h2')[1].innerHTML = `₹${Math.ceil(total)}`;
}
years_.addEventListener('mousemove', () => {
    const x = years_.value;
    years_.style.background = 'linear-gradient(90deg, rgb(208, 31, 75)' + x/0.3 + '%, rgb(191, 191, 191)' +  x/0.3 + '%)';
})
document.querySelector('#years_val').addEventListener('change', () => {
    years_.value = document.querySelector('#years_val').value;
    document.querySelector('#years_val').value = `Years ${years_.value}`;
})



percentage_.oninput = () => {
    document.querySelector('#percentage_val').value = `${percentage_.value}%`;
    
    const total = invest_.value * (Math.pow(1 + percentage_.value / 1200, 12 * years_.value) - 1) / (percentage_.value / 1200);
    document.querySelectorAll('#result h2')[1].innerHTML = `₹${Math.ceil(total)}`;
}
percentage_.addEventListener('mousemove', () => {
    const x = (percentage_.value/0.15 - 52) * 2;
    percentage_.style.background = 'linear-gradient(90deg, rgb(208, 31, 75)' + x + '%, rgb(191, 191, 191)' +  x + '%)';
})
document.querySelector('#percentage_val').addEventListener('change', () => {
    percentage_.value = document.querySelector('#percentage_val').value;
    document.querySelector('#percentage_val').value = `${percentage_.value}%`;
})
