const h1Element = document.getElementsByTagName("h1")[0];
function fadeFun() {
  if (h1Element.classList.contains("fade-in")) {
    h1Element.classList.remove("fade-in");
  }
  console.log(h1Element);
  h1Element.classList.add("fade-in");
}

window.onload = fadeFun;
