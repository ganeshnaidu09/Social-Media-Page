//side bar
const menuItems = document.querySelectorAll(".menu-item");

//messages
const messagesNotification = document.querySelector("#Message-notifications");
const messages = document.querySelector(".messages");
//search section
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
//theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
//fontsize
const fontSizes = document.querySelectorAll(
  ".font-size-1, .font-size-2, .font-size-3, .font-size-4, .font-size-5"
);
//root element
var root = document.querySelector(":root");
//color
const colorPalette = document.querySelectorAll(
  ".color-1, .color-2, .color-3, .color-4, .color-5"
);
//background color purpose
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');







//remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// messages box
//search chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    let p = chat.querySelector("p").textContent.toLowerCase();
    if ((name.indexOf(val) != -1) | (p.indexOf(val) != -1)) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

//search chat
messageSearch.addEventListener("keyup", searchMessage);

//highlight message card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//theme/display customization

//open Modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
//close Modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

//closing modal
themeModal.addEventListener("click", closeThemeModal);
//opening Modal
theme.addEventListener("click", openThemeModal);

// fontSizes change

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontsize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontsize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontsize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontsize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontsize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontsize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    //change the font font size of the root of html element
    document.querySelector("html").style.fontSize = fontsize;
  });
});
//remove active class from color
const changeActiveColorClass = ()=>{
  colorPalette.forEach(colorPicker =>{
    colorPicker.classList.remove('active');
  })
}


//change primary colors
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    changeActiveColorClass();
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});



//theme background values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color

const changeBG = ()=>{
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', ()=>{

  //add active class
  bg1.classList.add('active')
  //remove active class from the others
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  window.location.reload();

})


bg2.addEventListener('click', ()=>{
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  //add active class
  bg2.classList.add('active')
  //remove active class from the others
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBG();

})

bg3.addEventListener('click', ()=>{
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //add active class
  bg3.classList.add('active')
  //remove active class from the others
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBG();

})