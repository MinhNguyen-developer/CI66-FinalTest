let showResult = document.getElementById("nhap-link");
let btn1 = document.getElementById("type-1");
let btn2 = document.getElementById("type-2");
let btn3 = document.getElementById("type-3");

btn1.addEventListener("click", () => {
  getShortLink(1);
});

btn2.addEventListener("click", () => {
  getShortLink(2);
});

btn3.addEventListener("click", () => {
  getShortLink(3);
});

function getShortLink(type) {
  let link = document.getElementById("link-input").value;

  if (!link) {
    alert("Enter a link in an input box !");
  } else {
    fetch("https://api.shrtco.de/v2/shorten?url=" + link)
      .then((response) => response.json())
      .then((data) => {
        if (type == 1) {
          showResult.setAttribute("href", data.result.full_short_link);
          showResult.innerText = data.result.short_link;
        } else if (type == 2) {
          showResult.setAttribute("href", data.result.full_short_link2);
          showResult.innerText = data.result.short_link2;
        } else {
          showResult.setAttribute("href", data.result.full_short_link3);
          showResult.innerText = data.result.short_link3;
        }
      });
  }
}
