const handleMobileMenu = () => {
    const navMenuMobile = document.getElementById("navMobileMenu");
    const MobileMenu = document.getElementById("mobileMenu");
    const mobileMenuClose = document.getElementById("mobileMenuClose");

    const openMenu = () => {
        mobileMenu.classList.add('mobile-menu--open');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('mobile-menu--open');
    };

    navMenuMobile.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
};

const animateMainContent = () => {
    const elementsToAnimate = [
        { selector: ".main__hero-title", transform: false },
        { selector: ".main__hero-description", transform: false },
        { selector: ".main__hero-mobile-description", transform: false },
        { selector: ".main__hero-button", transform: false },
        ...Array.from(document.querySelectorAll(".main__feature")).map((feature, index) => ({
            element: feature,
            transform: true
        }))
    ];

    const animateElement = (element, delay = 0, transform = false) => {
        setTimeout(() => {
            element.style.opacity = 1;
            if (transform) {
                element.style.transform = "translateY(0)";
            }
        }, delay);
    }

    elementsToAnimate.forEach((item, index) => {
        const element = item.element || document.querySelector(item.selector);
        if (element) {
            animateElement(element, index * 200, item.transform);
        }
    });
};

handleMobileMenu();
animateMainContent();