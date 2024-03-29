//Meter class==tartas, tortas, etc.
let products_data = [
    {
    "id": 1,
    "name": "Tarta de Gelatina sabor Frutilla",
    "description": "Masa sable con crema chantilly y gelatina sabor frutilla",
    "price": "Precio mes de Agosto $2.300 (28cmm)",
    "img": "./img/products/tarta_gelatina.jpg",
    "measures": "26cm y 28cm"
    },
    {
    "id": 2,
    "name": "Tarta Lemonpie",
    "description": "Masa sable con crema de limon y merengue swizo",
    "price": "Precio mes de Agosto $2.300 (28cmm)",
    "img": "./img/products/tarta_lemonpie.jpg",
    "measures": "26cm y 28cm"
    },
    {
    "id": 3,
    "name": "Tarta Cabsha",
    "description": "Masa sable con dulce de leche y ganache de chocolate semiamargo",
    "price": "Precio mes de Agosto $2.400 (28cmm)",
    "img": "./img/products/tarta_cabsha.jpg",
    "measures": "26cm y 28cm"
    },
    {
    "id": 4,
    "name": "Tarta Banana Split",
    "description": "Masa sable con dulce de leche, banana, crema chantilly y hilos de chocolate semiamargo",
    "price": "Precio mes de Agosto $2.300 (28cmm)",
    "img": "./img/products/tarta_bananasplit.jpg",
    "measures": "26cm y 28cm"
    },
    {
    "id": 5,
    "name": "Tarta de Duraznos",
    "description": "Masa sable, crema chantilly, duraznos en rodajas, con una cobertura de gelatina sabor durazno",
    "price": "Precio mes de Agosto $2.300 (28cmm)",
    "img": "./img/products/tarta_durazno.jpg",
    "measures": "26cm y 28cm"
    },
    {
    "id": 5,
    "name": "Tarta de Manzana",
    "description": "Masa sable, manzana gratinada y cobertura de maza",
    "price": "Precio mes de Agosto $2.300 (28cmm)",
    "img": "./img/products/tarta_manzana.jpg",
    "measures": "26cm y 28cm"
    },
    {
    "id": 6,
    "name": "Torta Matera",
    "description": "Bizcochuelo de Limon con lineas de crema pastelera bañada en almibar y coco rallado",
    "price": "Precio mes de Agosto $1.500 (26cmm)",
    "img": "./img/products/torta_matera.jpg",
    "measures": "20cm, 24cm y 26cm"
    },
    {
    "id": 7,
    "name": "Alfajores de Maicena",
    "description": "",
    "price": "Precio mes de Agosto $1.600 la docena",
    "img": "./img/products/alfajores_maicena.jpg",
    "measures": ""
    },
    {
    "id": 8,
    "name": "Budin de chocolate con arandanos",
    "description": "",
    "price": "Precio mes de Agosto $1.200",
    "img": "./img/products/budin_chocolate_arandanos.jpg",
    "measures": "500gr"
    },
    {
    "id": 9,
    "name": "Budin de banana con dulce de leche",
    "description": "",
    "price": "Precio mes de Agosto $1.200",
    "img": "./img/products/budin_banana_dulcedeleche.jpg",
    "measures": "500gr"
    },
    {
    "id": 10,
    "name": "Budin de vainilla con Nueces",
    "description": "",
    "price": "Precio mes de Agosto $1.200",
    "img": "./img/products/budin_vainilla_nueces.jpg",
    "measures": "500gr"
    },
    {
    "id": 11,
    "name": "Torta Personalizada",
    "description": "Bizcochuelo sabor ",
    "price": "Precio mes de Agosto $3.700 (x Kilo)",
    "img": "./img/products/torta_personalizada.jpg",
    "measures": "A medida"
    },
    {
    "id": 12,
    "name": "Mini Torta Personalizada",
    "description": "Bizcochuelo sabor ",
    "price": "Precio mes de Agosto $3.700 (x Kilo)",
    "img": "./img/products/mini_torta.jpg",
    "measures": "Peso aproximado 1 Kilo"
    },
]


let promotions_data = [
    {
    "id": 1,
    "img": "./img/promotions/torta_kinder.png",
    "title": "Torta Kinder!",
    "description": "Doble relleno: durazno con crema y dulce de leche con oreo. Envio gratis 19 de Agosto.",
    "price": "Precio: $4.800"
    },
    {
    "id": 2,
    "img": "./img/promotions/box_dia_del_niño_2.jpeg",
    "title": "Box dia del Niño 2023!",
    "description": "",
    "price": "Precio: $4.500"
    },
    {
    "id": 3,
    "img": "./img/promotions/box_dia_del_niño_1.jpeg",
    "title": "Box dia del Niño 2023!",
    "description": "",
    "price": "Precio: $4.500"
    },
    {
    "id": 4,
    "img": "./img/promotions/mesa_dulce.jpg",
    "title": "Mesa Dulce!",
    "description": "Mesa dulce completa que contiene Pops de Chocolate, Cupcakes etc.",
    "price": "Precio: A cotizar"
    },
    {
    "id": 5,
    "img": "./img/promotions/dia_de_las_madres_2023.jpg",
    "title": "Dia de la Madre!",
    "description": "Mini torta, bizcohuelo de Vainilla/Chocolate, personaje a eleccion.",
    "price": "Precio: $4500"
    },
    {
    "id": 6,
    "img": "./img/promotions/dia_del_padre_2023.jpg",
    "title": "Dia del Padre!",
    "description": "Mini Tarta de gelatina, Mini lemonpie, Mini tarta bombon, 1 alfajor, 1 chocolate, 2 alfajores de maizena.",
    "price": "Precio: $2000"
    },
    {
    "id": 7,
    "img": "./img/promotions/dia_del_niño_2023.jpg",
    "title": "Dia del Niño!",
    "description": "Micro Torta, 2 cupcake, mini tarta de gelatina, 1 alfajor de maizena, 1 bombon, 1 paleta de chocolate.",
    "price": "Precio: $5000"
    },
]