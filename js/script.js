const getInput = (id) => {
    const input = document.getElementById(id);
    const inputString = input.value;
    input.value = "";
    return inputString;

}
const addProduct = () => {
    const product_name = getInput("product-name");
    const quantity = getInput("product-quantity");
    // console.log(product_name, quantity);
    const number = Number(quantity);
    // console.log(typeof number);
    if (!isNaN(product_name) || !Number.isInteger(number)) {
        console.log('soory ')
        return;
    }
    setLocalStorage(product_name, quantity);
    display();
}
const getLocalStorageIteam = () => {
    const localIteam = localStorage.getItem('All_Product');
    const localStorgeIteam = JSON.parse(localIteam);
    return localStorgeIteam;
}
const setLocalStorage = (name, quantity) => {
    // console.log(name, quantity);
    let products = getLocalStorageIteam();
    // console.log(products);
    if (!products) {
        products = {};
    }
    if (products[name]) {
        products[name] = parseInt(products[name] + parseInt(quantity))
    }
    else {
        products[name] = quantity;
    }
    localStorage.setItem('All_Product', JSON.stringify(products));

}
const display = () => {
    const products = getLocalStorageIteam();
    const productContainer = document.getElementById('all-products');
    for (const product in products) {
        console.log(products[product]);
        const name = product;
        const quantity = products[product]
        const div = document.createElement('div');
        div.innerHTML = `
     <div class="shadow-sm p-3 mb-2 bg-body rounded">
        <span class="fs-1">${name}</span>
        Quantity:<small class="fw-bold">
        ${quantity}
        </small>
    </div> 
        `;
        productContainer.appendChild(div);

    }

}