const menu = [
  {
    id: 1,
    title: "Senegal Style",
    category: "Native",
    price: 8.99,
    img: "./images/img1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 2,
    title: "Senegal Style",
    category: "Native",
    price: 8.99,
    img: "./images/img2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 3,
    title: "Senegal Style",
    category: "Native",
    price: 8.99,
    img: "./images/img3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 4,
    title: "Senegal Style",
    category: "Native",
    price: 8.99,
    img: "./images/img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 5,
    title: "Senegal Style",
    category: "Native",
    price: 8.99,
    img: "./images/img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 6,
    title: "Senegal Style",
    category: "Native",
    price: 8.99,
    img: "./images/img6.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
];

const menuItem = document.querySelector(".menuItem");
const singleItem = document.querySelector(".singleItem");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map((item) => {
    // console.log(item);
    return ` <div class="menuItem">
        <div class="photoContainer">
          <img src=${item.img} alt=${item.title} class="photo" />
        </div>
        <div class="itemInfo">
          <div class="title">
            <div class="title1">
              <span class="name">${item.title}</span>
              <span class="price">$${item.price}</span>
            </div>
            <span class="underline"></span>
          </div>
          <article>
            ${item.desc}
          </article>
        </div>
      </div>`;
  });
  displayMenu = displayMenu.join(" ");
  singleItem.innerHTML = displayMenu;
}
