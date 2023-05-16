let myProducts=`
<div class="product-container">
`

for (let elemento of products_data){
    //Iteramos los productos en el array de objetos "data.js"
    myProducts = myProducts + `
            <div class="product-card">
                <img src= ${elemento.img} alt="Imagen del producto" class="product-image">
                <div class="product-details">
                    <h3 class="product-name">${elemento.name}</h3>
                    <p class="product-description">${elemento.description}</p>
                    <p class="product-price">Precio: ${elemento.price}</p>
                    <p class="product-measurements">Medidas: ${elemento.measures}</p>
                </div>
            </div>
    `
}

document.querySelector(".content").innerHTML=myProducts;