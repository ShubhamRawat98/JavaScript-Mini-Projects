const btn = document.getElementById("nav-toggle");
const links = document.querySelector(".links");

btn.addEventListener("click", function () {
    //   console.log(links.classList);
    // console.log(links.classList.contains("random"));
    console.log(links.classList.contains("show-links"));
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
        console.log(links.classList.contains("show-links"));
    }
    else{
        links.classList.add("show-links")
        console.log(links.classList.contains("show-links"));
    }
});