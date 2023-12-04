const menu = [
  {
    id: 1,
    title: "Ginni",
    category: "Native",
    price: 8.99,
    img: "./images/img1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 2,
    title: "Abgada Style",
    category: "Yoruba",
    price: 8.99,
    img: "./images/img2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 3,
    title: "Shirt & Trouser",
    category: "English",
    price: 8.99,
    img: "./images/img3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 4,
    title: "White Ginni",
    category: "Native",
    price: 8.99,
    img: "./images/img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 5,
    title: "White Style",
    category: "English",
    price: 8.99,
    img: "./images/img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 6,
    title: "Native Style",
    category: "Native",
    price: 8.99,
    img: "./images/img6.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
  {
    id: 7,
    title: "Igbo Style",
    category: "Igbo",
    price: 8.99,
    img: "./images/img2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo    suscipit itaque omnis explicabo laudantium laboriosam distinctiooptio",
  },
];

const menuItem = document.querySelector(".menuItem");
const singleItem = document.querySelector(".singleItem");
const menuBtns = document.querySelector(".btnContainer");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns();
});

// to make the item dynamic
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

// to make the buttons dynamic
const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);
const categoryBtns = categories.map((category) => {
  console.log(category);
  return `
  <button class="filter-btn" type="button" data-id=${category}>
  ${category}
</button>`;
});
menuBtns.innerHTML = categoryBtns;

function displayMenuBtns() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItems) {
        if (menuItems.category === category) {
          return menuItems;
        }
        // console.log(menuItems.category, category);
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
