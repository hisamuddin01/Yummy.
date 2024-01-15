const menu = [
    {
      id: 1,
      title: "Magnam Tiste",
      category: "Starters",
      price: 5.95,
      img: "images/menu-item-1.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 2,
      title: "Aut Luia",
      category: "Starters",
      price: 14.95,
      img: "images/menu-item-2.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 3,
      title: "Est Eligendi",
      category: "Starters",
      price: 8.95,
      img: "images/menu-item-3.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 4,
      title: "Eos Luibusdam",
      category: "Starters",
      price: 12.95,
      img: "images/menu-item-4.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 5,
      title: "Eos Luibusdam",
      category: "Starters",
      price: 12.95,
      img: "images/menu-item-5.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 6,
      title: "Laboriosam Direva",
      category: "Starters",
      price: 9.95,
      img: "images/menu-item-6.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },

    {
      id: 7,
      title: "Magnam Tiste",
      category: "Brakfast",
      price: 5.95,
      img: "images/menu-item-5.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 8,
      title: "Aut Luia",
      category: "Brakfast",
      price: 14.95,
      img: "images/menu-item-4.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 9,
      title: "Est Eligendi",
      category: "Brakfast",
      price: 8.95,
      img: "images/menu-item-3.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 10,
      title: "Eos Luibusdam",
      category: "Brakfast",
      price: 12.95,
      img: "images/menu-item-2.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 11,
      title: "Eos Luibusdam",
      category: "Brakfast",
      price: 12.95,
      img: "images/menu-item-1.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 12,
      title: "Laboriosam Direva",
      category: "Brakfast",
      price: 9.95,
      img: "images/menu-item-6.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 13,
      title: "Magnam Tiste",
      category: "Lunch",
      price: 5.95,
      img: "images/menu-item-4.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 14,
      title: "Aut Luia",
      category: "Lunch",
      price: 14.95,
      img: "images/menu-item-3.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 15,
      title: "Est Eligendi",
      category: "Lunch",
      price: 8.95,
      img: "images/menu-item-2.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 16,
      title: "Eos Luibusdam",
      category: "Lunch",
      price: 12.95,
      img: "images/menu-item-1.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 17,
      title: "Eos Luibusdam",
      category: "Lunch",
      price: 12.95,
      img: "images/menu-item-6.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 18,
      title: "Laboriosam Direva",
      category: "Lunch",
      price: 9.95,
      img: "images/menu-item-5.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 19,
      title: "Magnam Tiste",
      category: "Dinner",
      price: 5.95,
      img: "images/menu-item-6.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 20,
      title: "Aut Luia",
      category: "Dinner",
      price: 14.95,
      img: "images/menu-item-5.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 21,
      title: "Est Eligendi",
      category: "Dinner",
      price: 8.95,
      img: "images/menu-item-4.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 22,
      title: "Eos Luibusdam",
      category: "Dinner",
      price: 12.95,
      img: "images/menu-item-3.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 23,
      title: "Eos Luibusdam",
      category: "Dinner",
      price: 12.95,
      img: "images/menu-item-2.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
    {
      id: 24,
      title: "Laboriosam Direva",
      category: "Dinner",
      price: 9.95,
      img: "images/menu-item-1.png",
      desc: `Lorem, deren, trataro, filede, nerada `,
    },
  ];

const navOpenBtn = document.querySelector('.nav-open');
const navCloseBtn = document.querySelector('.nav-close');
const linksContainer = document.querySelector('.links-container');


navOpenBtn.addEventListener('click', ()=> {
    linksContainer.classList.add('show-links')
})
navCloseBtn.addEventListener('click', ()=> {
    linksContainer.classList.remove('show-links')
})


const menuContainer = document.querySelector('.menu-items')
const btnContainer = document.querySelector('.menu-btn-container');

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu)
    displayMenuButtons();
})

function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function(item) {
        console.log(item)
        return`<div class="menu-item">
            <div class="menu-img">
                <img src=${item.img} alt=${item.title}>
            </div>
            <h5>${item.title}</h5>
            <p>${item.desc}</p>
            <span class="price">$${item.price}</span>
        </div>`
    });
    displayMenu = displayMenu.join("");
    menuContainer.innerHTML = displayMenu;
}