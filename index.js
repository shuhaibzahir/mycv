// portfolio item
const portfolioFilter = document.querySelector(".portfolio-filter"),
  filterBtns = portfolioFilter.children,
  totalFilterBtns = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolio = portfolioItems.length;

for (let i = 0; i < totalFilterBtns; i++) {
  filterBtns[i].addEventListener("click", function () {
    portfolioFilter.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < portfolioItems.length; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// preloader
window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});
// portfolio Light Box
const lightBox = document.querySelector(".lightbox"),
  lightBoxImage = lightBox.querySelector(".lightbox-img"),
  lightBoxClose = lightBox.querySelector(".lightbox-close"),
  lightBoxText = lightBox.querySelector(".lightbox-text"),
  lightBoxCounter = lightBox.querySelector(".lightbox-counter");
let itemIndex = 0;
for (let i = 0; i < totalPortfolio; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightBox();
  });
}
function nextItem() {
  if (itemIndex === totalPortfolio - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolio - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}
function toggleLightBox() {
  lightBox.classList.toggle("open");
}
function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightBoxImage.src = imgSrc;
  lightBoxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightBoxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolio;
}

// lightbox Close

lightBox.addEventListener("click", function (event) {
  if (event.target === lightBoxClose || event.target === lightBox) {
    toggleLightBox();
  }
});

// Aside Navigation Bar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section");
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // remove section classlist
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // add back section class
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    asideSectionToggleBtn();
  });
}

function showSection(element) {
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function removeBackSection() {
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("back-section");
  }
}
// hire me
function updaetNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-iindex");
  showSection(this);
  updaetNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navToggle = document.querySelector(".nav-toggle"),
  aside = document.querySelector(".aside");

navToggle.addEventListener("click", () => {
  asideSectionToggleBtn();
});

function asideSectionToggleBtn() {
  aside.classList.toggle("open");
  navToggle.classList.toggle("open");
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.toggle("open");
  }
}
