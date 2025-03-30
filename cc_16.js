//Task 1 - Set up the project structure
//Completed in html

//Task 2 - Implement fetchProductsThen using .then() and .catch()

function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(response => response.json())
    .then(products => {
        console.log("Product Name: ");
        products.forEach(product => console.log(product.fields.name));
    })
    .catch(error => handleError(error));
}

//Task 3 - Add fetchProductsAsync using async/await and try/catch

async function fetchProductsAsync() {
    try{
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}