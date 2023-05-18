let myPromotions = `
<div class="promotions-container">
`;

    for (let i = 0; i < promotions_data.length; i += 2) {
    const elemento1 = promotions_data[i];
    const elemento2 = promotions_data[i + 1];

    myPromotions += `
        <div class="promocion">
            <div class="imagen">
                <img src="${elemento1.img}" alt="Promoción 1">
            </div>
            <div class="contenido">
                <div class="descripcion">
                    <h2>${elemento1.title}</h2>
                    <p>${elemento1.description}</p>
                </div>
                <div class="precio">
                    <p>${elemento1.price}</p>
                </div>
            </div>
        </div>
    `;

    if (elemento2) {
        myPromotions += `
        <div class="promocion">
            <div class="contenido">
                <div class="descripcion">
                    <h2>${elemento2.title}</h2>
                    <p>${elemento2.description}</p>
                </div>
                <div class="precio">
                    <p>${elemento2.price}</p>
                </div>
            </div>
            <div class="imagen">
                <img src="${elemento2.img}" alt="Promoción 2">
            </div>
        </div>
        `;
    }
}

myPromotions += `</div>`;
document.querySelector(".content").innerHTML = myPromotions;
