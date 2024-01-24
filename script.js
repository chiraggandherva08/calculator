const return_ = document.querySelector('#return');
const years_ = document.querySelector('#years');
const percentage_ = document.querySelector('#percentage');

return_.addEventListener('change', () => {
    document.querySelector('#rupee').value = `₹${return_.value}`;
})

years_.addEventListener('change', () => {
    document.querySelector('#years_val').value = `${years_.value} Years`;
})

percentage_.addEventListener('change', () => {
    document.querySelector('#percentage_val').value = `${percentage_.value}%`;
})
