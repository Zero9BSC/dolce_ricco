// Obtener las secciones de widget
const widget1Section = document.querySelector('.widget-1');
const widget2Section = document.querySelector('.widget-2');

// Obtener los primeros dos elementos del array
const firstItem = promotions_data[0];
const secondItem = promotions_data[1];

// Crear el contenido para la sección widget-1
const widget1Content = `
  <div>
    <a href="promotions.html">
      <img src="${firstItem.img}" alt="${firstItem.title}">
    </a>
  </div>
`;

// Crear el contenido para la sección widget-2
const widget2Content = `
  <div>
    <a href="promotions.html">
      <img src="${secondItem.img}" alt="${secondItem.title}">
    </a>
  </div>
`;

// Agregar el contenido a las secciones de widget
widget1Section.innerHTML = widget1Content;
widget2Section.innerHTML = widget2Content;

