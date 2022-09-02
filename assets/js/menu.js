const starterMenu =[
    {
        name: "Pine nut sbrisalona",
        price: "$29.79", 
        info:"Sed fermentum eros vitae eros",
    },
    {
        name: "Aenean eu",
        price: "$19.35", 
        info:"Feugiat maximus neque pharetra",
    },
    {
        name: "Sed feugiat",
        price: "$12.19", 
        info:"Sed feugiat",
    },
    {
        name: "Consectetur",
        price: "$21.89", 
        info:"Etiam cursus facilisis tortor",
    }
];
starterMenu.map((item)=>{
    document.querySelector("#starters").innerHTML+=`
    <div class="menu-item">
        <div class="item">
            <a href="#" class="name-item">${item.name}</a>
            <div class="line-item"></div>
            <div class="price-item">${item.price}</div>
        </div>
        <span class="info-item">${item.info}</span>
    </div>
    `
});
const drinksMenu =[
    {
        name: "Vivamus pretium",
        price: "$29.79", 
        info:"Sed fermentum eros vitae eros",
    },
    {
        name: "Duis pharetra ligula",
        price: "$19.35", 
        info:"Feugiat maximus neque pharetra",
    },
    {
        name: "In eu dolor",
        price: "$53.34", 
        info:"Proin lacinia nisl ut ultricies posuere nulla",
    },
    {
        name: "Feugiat maximus",
        price: "$62.45", 
        info:"Sed fermentum eros vitae eros",
    }
];
drinksMenu.map((item)=>{
    document.querySelector("#drinks").innerHTML+=`
    <div class="menu-item">
        <div class="item">
            <a href="#" class="name-item">${item.name}</a>
            <div class="line-item"></div>
            <div class="price-item">${item.price}</div>
        </div>
        <span class="info-item">${item.info}</span>
    </div>
    `
});
const mainMenu =[
    {
        name: "DUIS SED ALIQUET",
        price: "$31.18", 
        info:"Proin lacinia nisl ut ultricies posuere nulla",
    },
    {
        name: "SUSPENDISSE",
        price: "$70.25", 
        info:"Feugiat maximus neque pharetra",
    },
    {
        name: "SCELERISQUE SED",
        price: "$36.19", 
        info:"Etiam cursus facilisis tortor",
    },
    {
        name: "MOLLIS NULLA",
        price: "$19.50", 
        info:"Proin lacinia nisl ut ultricies posuere nulla",
    },
    {
        name: "CONVALLIS AUGUE",
        price: "$29.15", 
        info:"Sed fermentum eros vitae eros",
    },
    {
        name: "MAECENAS TRISTIQUE",
        price: "$29.79", 
        info:"Feugiat maximus neque pharetra",
    },
    {
        name: "DUIS TINCIDUNT",
        price: "$19.35", 
        info:"Proin lacinia nisl ut ultricies posuere nulla",
    }
];
mainMenu.map((item)=>{
    document.querySelector("#main").innerHTML+=`
    <div class="menu-item">
        <div class="item">
            <a href="#" class="name-item">${item.name}</a>
            <div class="line-item"></div>
            <div class="price-item">${item.price}</div>
        </div>
        <span class="info-item">${item.info}</span>
    </div>
    `
});
const dessertMenu =[
    {
        name: "TEMPUS ALIQUET",
        price: "$9.79", 
        info:"Proin lacinia nisl ut ultricies posuere nulla",
    },
    {
        name: "SCELERISQUE",
        price: "$19.35", 
        info:"Sed fermentum eros vitae eros",
    },
    {
        name: "CRAS MAXIMUS",
        price: "$5.79", 
        info:"Duis pharetra ligula at urna dignissim",
    }
];
dessertMenu.map((item)=>{
    document.querySelector("#dessert").innerHTML+=`
    <div class="menu-item">
        <div class="item">
            <a href="#" class="name-item">${item.name}</a>
            <div class="line-item"></div>
            <div class="price-item">${item.price}</div>
        </div>
        <span class="info-item">${item.info}</span>
    </div>
    `
});
const lunchMenu = [
    {
        photo: "./assets/image/menu/lunch-menu/lunch-1.webp",
        name: "SED VARIUS",
        info:"Aenean pharetra tortor dui in pellentesque",
        price:"$29.79",
    },
    {
        photo: "./assets/image/menu/lunch-menu/lunch-2.webp",
        name: "SBRISALONA",
        info:"Proin lacinia nisl ut ultricies posuere nulla",
        price:"$29.79",
    },
    {
        photo: "./assets/image/menu/lunch-menu/lunch-3.webp",
        name: "TEMPUS ALIQUET",
        info:"Aenean condimentum ante erat",
        price:"$45.09",
    },
    {
        photo: "./assets/image/menu/lunch-menu/lunch-4.webp",
        name: "CRAS EGET MAGNA",
        info:"Sed fermentum eros vitae eros",
        price:"$45.09",
    },
    {
        photo: "./assets/image/menu/lunch-menu/lunch-5.webp",
        name: "DUIS MASSA",
        info:"Proin lacinia nisl ut ultricies posuere nulla",
        price:"$12.75",
    },
    {
        photo: "./assets/image/menu/lunch-menu/lunch-6.webp",
        name: "NULLAM MAXIMUS",
        info:"Duis massa nibh porttitor nec imperdiet eget",
        price:"$12.75",
    },
];
lunchMenu.map((item)=>{
    document.querySelector("#lunch-menu").innerHTML += `
    <div class="menu-item">
        <figure class="menu-item-photo">
            <a href="#">
                <img src=${item.photo} alt="lunch" >
            </a>
        </figure>
        <div class="menu-item-text">
            <a href="#" class="name-item">${item.name}</a>
            <span class="info-item">${item.info}</span>
            <span class="price-item">${item.price}</span>
        </div>
    </div>
    `
});

const dinnerhMenu = [
    {
        photo: "./assets/image/menu/dinner-menu/dinner-1.webp",
        name: "MAECENAS TRISTIQUE",
        info:"Aenean pharetra tortor dui in pellentesque",
        price:"$29.79",
    },
    {
        photo: "./assets/image/menu/dinner-menu/dinner-2.webp",
        name: "CRAS MAXIMUS",
        info:"Proin lacinia nisl ut ultricies posuere nulla",
        price:"$29.79",
    },
    {
        photo: "./assets/image/menu/dinner-menu/dinner-3.webp",
        name: "PINE NUT SBRISALONA",
        info:"Aenean condimentum ante erat",
        price:"$45.09",
    },
    {
        photo: "./assets/image/menu/dinner-menu/dinner-4.webp",
        name: "PINE NUT SBRISALONA",
        info:"Sed fermentum eros vitae eros",
        price:"$45.09",
    },
    {
        photo: "./assets/image/menu/dinner-menu/dinner-5.webp",
        name: "SUSPENDISSE EU",
        info:"Proin lacinia nisl ut ultricies posuere nulla",
        price:"$12.75",
    },
    {
        photo: "./assets/image/menu/dinner-menu/dinner-6.webp",
        name: "TEMPOR MALESUADA",
        info:"Duis massa nibh porttitor nec imperdiet eget",
        price:"$12.75",
    },
];
dinnerhMenu.map((item)=>{
    document.querySelector("#dinner-menu").innerHTML += `
    <div class="menu-item">
        <figure class="menu-item-photo">
            <a href="#">
                <img src=${item.photo} alt="lunch" >
            </a>
        </figure>
        <div class="menu-item-text">
            <a href="#" class="name-item">${item.name}</a>
            <span class="info-item">${item.info}</span>
            <span class="price-item">${item.price}</span>
        </div>
    </div>
    `
});
   