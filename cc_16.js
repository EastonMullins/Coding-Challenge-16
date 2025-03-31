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

//Task 4 Display products in the DOM with name, price, and image

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    
    products.slice(0, 5).forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
          <h2>${product.fields.name}</h2>
          <p>$${(product.fields.price / 100).toFixed(2)}</p>
        `;
        container.appendChild(productElement);
      });
    }