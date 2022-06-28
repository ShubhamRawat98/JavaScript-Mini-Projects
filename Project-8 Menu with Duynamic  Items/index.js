const menu = [
    {
        id: 1,
        category: "Breakfast",
        title: "Buttermilk Pancakes",
        price: 15,
        img: "https://img.freepik.com/free-photo/stack-homemade-pancakes-with-honey-syrup-berries_114579-10889.jpg?t=st=1655973046~exp=1655973646~hmac=94e497cba6ae90ca6983b524b867886047d402f8e2c40c2184ad31bbae1ddaa9&w=996",
        desc: "Buttermilk Pancakes Buttermilk Pancakes Buttermilk Pancakes  Buttermilk Pancakes Buttermilk Pancakes fdgfhgjh pankcKES"
    },
    {
        id: 2,
        category: "Lunch",
        title: "Chapati",
        price: 10,
        img: "https://cdn3.mycity4kids.com/images/article-images/mobile-web/thumbnails/img-20191004-5d96e777264ec.jpg",
        desc: "Bchapati raedy tomrwat teasty amdkskchshcencken rounf hotn  balonandkdelmv lmmdkjcjejhjnm cejbjcscnkn chapati "
    },
    {
        id: 3,
        category: "Lunch",
        title: "Rice",
        price: 20,
        img: "https://images.everydayhealth.com/images/diet-nutrition/all-about-rice-722x406.jpg?w=1110",
        desc: "Rice rice rice snkcksj mdnkwd carbs nbsnsk healthy dksdkjskj tummy full ekdnknjk kndheuh  qbyfsf riceksnck rice "
    },
    {
        id: 4,
        category: "Drinks",
        title: "Mix Fruit",
        price: 30,
        img: "https://c.ndtvimg.com/2019-03/apc7ie28_juices_625x300_12_March_19.jpg",
        desc: "ALL fruits mix mix mix fruit huice shaker snjn sns ssbj  x xhwgxwgxx x xbuwhuh xjwhsuhw jhwJuice shakenmango kix all kix fryuit "
    },
    {
        id: 5,
        category: "Lunch",
        title: "Chiken",
        price: 100,
        img: "https://www.paesana.com/hubfs/Blog/Chicken-Cacciatore-in-a-black-dutch-oven-on-table.jpg",
        desc: "Chiken butter snjn sns ssbj  x xhwgxwgxx x xbuwhuh xjwhsuhw jhwiji chiekn meat butter chiken "
    },
    {
        id: 6,
        category: "Breakfast",
        title: "Paratha",
        price: 50,
        img: "https://as2.ftcdn.net/v2/jpg/02/29/55/23/1000_F_229552345_TK2cKkoJCvLmdjJYaShm5uPOFNfgXlar.jpg",
        desc: "Paratha mxkj chitisn paratha sdfg zvbg mhjjth DDaaD aalD aa lDa al      Da aldkcjj dwjou lakajhb svgwvd n eb Aloo ka Paratha "
    },
    {
        id: 7,
        category: "Drinks",
        title: "Ganne Ka Juice",
        price: 30,
        img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/08/09/893861-sugarcane-juice.jpg",
        desc: "Ganne ka juice Juice shkaesdfg zvbgmhjjth DDaaDaalDaalDaalDaaldkcjj dwjou lakajhb svgwvd neb cj ganne ka juice juice shake ganna "
    },
    {
        id: 8,
        category: "Drinks",
        title: "Mango Shake",
        price: 30,
        img: "https://kfoods.com/images1/newrecipeicon/mango-shake-by-chef-fauzia_5062.jpg",
        desc: "Mango shake shake aam  sdfg zvbgmhjjth DDaaDaalDaalDaalDaaldkcjj dwjou lakajhb svgwvd neaam shake mango shake mango "
    },
    {
        id: 9,
        category: "Breakfast",
        title: "chai",
        price: 10,
        img: "https://imagevars.gulfnews.com/2021/11/02/Masala-chai_17cdf16efb3_large.jpg",
        desc: "Chai tea clack lemon sdfg zvbgmhjjth DDaaDaalDaalDaalDaaldkcjj dwjou lakajhb svgwvd black tea lemon tea chai "
    },
    {
        id: 10,
        category: "Breakfast",
        category: "Drinks",
        title: "Bread",
        price: 10,
        img: "https://www.hotelmogel.com/wp-content/uploads/2017/04/iStock-153014650.jpg",
        desc: "Bread bun lemon sdfg zvbgmhjjth DDaaDaalDaalDaalDa dwjou lakajhb svgwvd black tea lemon tea chai wofth butter bread "
    },
    {
        id: 11,
        category: "Sweet",
        title: "Ras Miali",
        price: 10,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ras_Malai_2.JPG/1280px-Ras_Malai_2.JPG",
        desc: "Sweet ras milai mithaisdfg zvbgmhjjth DDaaDaalDaalDaalDa dwjou lakajhb svgwvd blsweet miythai ras malai sweets mitha ras miali"
    },
]

const itemBox = document.querySelector(".itemBox");

//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuBtns();
});
    


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<div class="item">
        <img class="itemImage" src="${item.img}" alt="${item.title}">
        <div class="itemInfo">
            <header class="infoHeader">
               <h4 class="itemName">${item.title}</h4>
               <h4 class="itemPrice">${item.price}</h4>
            </header>
            <p class="infoText">${item.desc}</p>
        </div>
     </div>`;
    })
    displayMenu = displayMenu.join("");
    itemBox.innerHTML = displayMenu;

}

function displayMenuBtns(){

    const categories = menu.reduce(function(values, item){
        if (!values.includes(item.category)){
        values.push(item.category);
        }
        return values;
    },["All"]);
    
    
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");

    
    document.querySelector(".btn-box").innerHTML=categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    //filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory= menu.filter(function(menuItem){
            // console.log(menuItem.category)
            if(menuItem.category===category)
            return menuItem;
        });
        if(category==="All"){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory)
        }
    });
});
    
}