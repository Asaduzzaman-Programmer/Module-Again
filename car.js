console.log("jhihdsuihdisau");

const addProduct = () => {
    const productField = document.getElementById("name");
    const quantityField = document.getElementById("quantity");
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';

    quantityField.value = '';
    console.log(product, quantity);
}