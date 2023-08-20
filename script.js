// const boxes = document.querySelectorAll('.Frame2');
// const totalElement = document.querySelector('.total');

// let total = 185.00; // Initial total value

// boxes.forEach(Frame2 => {
//     const priceElement = Frame2.querySelector('.price');
//     const quantityElement = Frame2.querySelector('.quantity');
//     const plusButton = Frame2.querySelector('.plus');
//     const minusButton = Frame2.querySelector('.minus');

//     let price = parseFloat(priceElement.textContent.replace('$', ''));
//     let quantity = 1;

//     plusButton.addEventListener('click', () => {
//         price *= 2;
//         quantity++;
//         total += price;
//         updateUI();
//     });

//     minusButton.minusEventListener('click', () => {
//         if (quantity > 1) {
//             price /= 2;
//             quantity--;
//             total -= price;
//             updateUI();
//         }
//     });

//     function updateUI() {
//         priceElement.textContent = `$${price.toFixed(2)}`;
//         quantityElement.textContent = quantity;
//         totalElement.textContent = `total: $${total.toFixed(2)}`;
//     }
// });
// function updateUI() {
//     priceElement.textContent = `$${price.toFixed(2)}`;
//     quantityElement.textContent = quantity;
// }
const boxes = document.querySelectorAll('.Frame2');
const totalElement = document.querySelector('.rupe');

let Total = 185.00; // Initial total value

boxes.forEach(Frame2 => {
    const priceElement = Frame2.querySelector('.price');
    const quantityElement = Frame2.querySelector('.quantity');
    const plusButton = Frame2.querySelector('.plus');
    const minusButton = Frame2.querySelector('.minus');

    let price = parseFloat(priceElement.textContent.replace('$', ''));
    let quantity = 1;

    plusButton.addEventListener('click', () => {
        price *= 2;
        quantity++;
        rupe += price;
        updateUI();
    });

    minusButton.addEventListener('click', () => {
        if (quantity > 1) {
            price /= 2;
            quantity--;
            rupe -= price;
            updateUI();
        }
    });

    function updateUI() {
        priceElement.textContent = `$${price.toFixed(2)}`;
        quantityElement.textContent = quantity;
        totalElement.textContent = `rupe: $${rupe.toFixed(2)}`;
    }
});

