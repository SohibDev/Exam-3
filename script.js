window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
      document.querySelector("header").style.padding = "10px 5%";
    } else {
      document.querySelector("header").style.padding = "30px 5%";
    }
  }

  const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{ 
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})