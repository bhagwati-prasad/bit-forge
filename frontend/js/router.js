const populateTarget = (target = null) => {
                    populateTarget("page");
    if(!target) {
        log.error("no target");
    }
}

const router = (() => {
    log.startupMessage("Router");

    const navigate = (path, target) => {
        history.pushState({target, path}, "", path);
    }
    const init = (selector) => {
        let links = document.querySelectorAll(`body [${selector}]`)
        links.forEach((link) => {
            let validHref = !!link.href && !link.getAttribute('href').startsWith('http');
            if(validHref) {
                link.addEventListener("click", (evt) => {
                    evt.preventDefault();
                    navigate(link.href, link.target);
                });
            }
        });

        window.onpopstate = (evt) => {
            let navigateInfo = {...evt.state, timestamp: evt.timeStamp};
            console.log(navigateInfo);
        }
    }
    init('href');

    const add = () => {
    }

    const remove = () => {
    }

    const show = () => {
    }

    const load = () => {
    }

    return {
        navigate,
        add,
        remove,
        show,
        load
    }
})();

const cache = (() => {
});

const prefetch = (() => {
});
