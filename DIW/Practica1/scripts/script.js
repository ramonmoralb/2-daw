
function highlightLink() {
    const currentURL = window.location.href;
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        const { href } = link;

        if (href === currentURL) {
            link.classList.add('bold');
        }
    });
}


highlightLink();