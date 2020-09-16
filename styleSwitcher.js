const links = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  for (let i = 0; i < links.length; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}
// body skin
const bodySkin = document.querySelectorAll(".body-skin"),
  totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "Dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });
}

document.querySelector(".togle-switcher").addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
