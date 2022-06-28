const btn = document.querySelector(".nav-toggle");
const crossBtn = document.querySelector(".cross");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", function () {

    //   console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(sidebar.classList.contains("show-sidebar"));
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
        btn.classList.remove("remove-nav-toggle");
        // console.log(sidebar.classList.contains("show-sidebar"));
    }
    else {
        sidebar.classList.add("show-sidebar");
        btn.classList.add('remove-nav-toggle');
        // console.log(sidebar.classList.contains("show-sidebar"));
    }

})
crossBtn.addEventListener("click", function () {

    //   console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(sidebar.classList.contains("show-sidebar"));
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
        btn.classList.remove("remove-nav-toggle");
        // console.log(sidebar.classList.contains("show-sidebar"));
    }
    else {
        sidebar.classList.add("show-sidebar");
        btn.classList.add('remove-nav-toggle');
        // console.log(sidebar.classList.contains("show-sidebar"));
    }

})