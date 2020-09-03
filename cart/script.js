const init = () => {
    const products = document.querySelector('.products');
    const cartList = document.querySelector('.cart_list');
    const price = document.querySelector('.price');
    const cart = [];
    const productsArr = [
        {   
            name: 'Product 1',
            img: '../img/small/1.jpg',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            price: 500,
            quantity: 10,
        },
        {
            name: 'Product 2',
            img: '../img/small/2.jpg',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            price: 1000,
            quantity: 5,
        },
        {
            name: 'Product 3',
            img: '../img/small/3.jpg',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            price: 1500,
            quantity: 13,
        },
    ];

    const productMaker = (item, pos) => {
        const product = document.createElement('div');
        product.className = 'product';
        product.id = 'product_' + pos;

        product.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.img}" alt="1">
            <p>${item.details}</p>
            <p id="price_${pos}">${item.price}</p>
            <p id="left_${pos}">Left: ${item.quantity}</p>
            <div>
                <input type="number" class="quantity" id="quantity_${pos}" name="quantity" min="1" max="${item.quantity}">
                <button id="buy_${pos}">BUY</button>
            </div>`;
            

        products.appendChild(product);
    }

    productsArr.forEach((item, pos) => {
        productMaker(item, pos);
    })

    const buyBtns = document.querySelectorAll('button');
    

    const cartChange = (id) => {
        const quantity = document.querySelector(`#quantity_` + id);
        const buy = document.querySelector(`#buy_` + id);
        const left = document.querySelector('#left_' + id);

        if (quantity.value > productsArr[id].quantity) {
            return alert('Столько товаров нет на складе');
        }

        if (cart.find(el => el.item == id)) {
            console.log(id);
            cart.find(el => el.item == id).count += +quantity.value;
        } else {
            cart.push({
                item: id,
                name: productsArr[id].name,
                details: productsArr[id].details,
                count: +quantity.value,
                price: productsArr[id].price,
                sum: quantity.value * productsArr[id].price,
            })
        }
            
        productsArr[id].quantity -= quantity.value;
        quantity.value = '';

        if (!productsArr[id].quantity) {
            quantity.disabled = true;
            buy.disabled = true;  
        } else {
            quantity.max = productsArr[id].quantity;
        }

        left.innerText = `Left: ${productsArr[id].quantity}`;

        let totalPrice = null;
        cartList.innerHTML = '';
        price.innerHTML = '';

        cart.forEach(item => {
            const newItem = document.createElement('div');
            newItem.id = `cartItem_${item.item}`;
            newItem.className = 'cartItem';

            newItem.innerHTML = `
            <h4 class='cartItemName'>${item.name}</h4>
            <p class='desc'>${item.details}</p>
            <p class='desc'>Price: ${item.price}</p>
            <p class='desc'>Quantity: ${item.count}</p>`;

            cartList.appendChild(newItem);
            totalPrice += item.sum;

        })
            
        const newPrice = document.createElement('div');
            newPrice.className = `cartPrice`;

            newPrice.innerHTML = `
            <h4 class='cartItemName'>Total:</h4>
            <p>${totalPrice} rub</p>
            `;
        
        price.appendChild(newPrice);

        
    }  

    buyBtns.forEach(item => {
        const curProduct = item.id.substring(item.id.length - 1);
        item.addEventListener('click', () => {cartChange(curProduct)});
    });
}

document.addEventListener('DOMContentLoaded', init);