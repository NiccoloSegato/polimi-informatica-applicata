function filterLessons(event, target) {
    removeToggles();
    event.classList.add('selected');

    if(target === 'all') {
        let cards = document.getElementsByClassName('index-content-card');

        for(let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        }
    }
    else {
        let cards = document.getElementsByClassName('index-content-card');

        console.log(cards);
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains(target)) {
                cards[i].style.display = 'block';
            }
            else {
                cards[i].style.display = 'none';
            }
        }
    }
    
}

function removeToggles() {
    let filters = document.getElementsByClassName('filter-button');

    for(let i = 0; i < filters.length; i++) {
        filters[i].classList.remove('selected');
    };
}