

//header menu

function headerMenu() {
    let toggler = document.querySelector(".js-header-toggler")
    let menu = document.querySelector(".js-header-menu")
    let items = menu.querySelectorAll("li")

    let menuToggle = () => {
        menu.classList.toggle("open");
        toggler.classList.toggle("active");
    }
    toggler.addEventListener("click", menuToggle);

    items.forEach((item) => {
        item.querySelector("a").addEventListener("click", () => {
            if(window.innerWidth <= 991) {
                menuToggle();
            }
        });
    });
};

headerMenu();



// schedule tabs

function scheduleTabs() {
    let tabs = document.querySelectorAll('.js-schedule-tab');

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if(tab.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule-tab.active").classList.remove("active");
            tab.classList.add("active");
            let target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        })
    })
};
scheduleTabs();