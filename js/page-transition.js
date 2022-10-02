
    const transitionElement = document.querySelector('.transition-element');
    const anchors = document.querySelectorAll('a:not([target="_blank"], a');

    setTimeout(() => {
        transitionElement.classList.remove('is-active');
    }, 30);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transitionElement.classList.add('is-active');

            setTimeout(function(){
                location.href = target;
            } , 1000);
        })
    }
