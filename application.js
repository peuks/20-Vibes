const elements = {
    // burger: document.querySelector(".burger"),
    nav: document.querySelector(".nav__links"),
    links: document.querySelectorAll(".nav__links a"),
    btn: document.querySelector("#btn-float"),
};

function renderNavBar() {
    elements.links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.2}s`;
        }
    });
}

// elements.burger.addEventListener("click", () => {
//     elements.nav.classList.toggle("nav-active");
//     renderNavBar();
//     // Toggle Burger
//     elements.burger.classList.toggle("toggle");
// })






const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {

    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

// Change Background Color
function getColor() {
    const colors = [
        "#2B2D42",
        "#E6597C",
        "#F7E733",
        "#41E2BA",
        "#C1666B"
    ];
    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}

function handleUpdate() {
    // I'm using this.base because of my id <3.
    document.documentElement.style.setProperty('--clr-2', getColor());

}


elements.btn.addEventListener('click', handleUpdate);