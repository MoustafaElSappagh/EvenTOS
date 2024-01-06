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