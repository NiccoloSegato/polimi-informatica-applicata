const dictionary = {
    '1': {
        title: 'Indice',
        description: 'Repository di questa pagina',
        image: 'assets/images/1.jpg',
        links: {
            '1': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata'
            }
        }
    },
    '2': {
        title: 'Introduzione a P5.JS',
        description: 'Introduzione al software P5.JS e al relativo framework.',
        image: 'assets/images/2.png',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson2/p5-2/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson2/p5-2'
            }
        }
    },
    '3': {
        title: 'Cielo stellato',
        description: 'Creazione di un cielo stellato con il software P5.JS.',
        image: 'assets/images/3.jpg',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson2/p5-1/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson2/p5-1'
            }
        }
    },
    '4': {
        title: 'Casette',
        description: 'Creazione di un insieme di case con il software P5.JS.',
        image: 'assets/images/4.png',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson2/p5-3/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson2/p5-3'
            }
        }
    },
    '5': {
        title: '<span class="challenge-label"><i class="fa-solid fa-trophy"></i> CHALLENGE</span> - Kandinskij',
        description: 'L\'obiettivo di questa prima challenge è quello di creare un\'illustrazione a nostra scelta.<br>Questa è ricaduta sul quadro <strong>Verso l\'alto</strong> di Wassily Kandinskij.<br>Ho scelto quest\'opera perché ha diverse geometrie e colori che si adattano bene al software P5.JS., andando ad utilizzare tutte le funzioni per la creazione di forme primitive.',
        image: 'assets/images/5.png',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson2/p5-4/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson2/p5-4'
            }
        }
    },
    '6': {
        title: 'Seguire il mouse',
        description: 'In questo sketch abbiamo imparato a seguire il mouse, generando linee e andando a ruotarle in base a click e movimenti del cursore.',
        image: 'assets/images/6.png',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson3/followthemouse/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson3/followthemouse'
            }
        }
    },
    '7': {
        title: 'Luna sulle case',
        description: 'In questo sketch abbiamo imparato a creare un\'animazione con la luna che si muove sullo sfondo e delle stelle che vengono generate in modo randomico usando la funzione <i>random()</i>.',
        image: 'assets/images/7.png',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson3/base-house-sketch/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson3/base-house-sketch'
            }
        }
    },
    '8': {
        title: 'Transizioni',
        description: 'In questo sketch abbiamo imparato a usare le transizioni',
        image: 'assets/images/7.png',
        links: {
            '1': {
                icon: 'fa-solid fa-arrow-right',
                label: 'Vai alla pagina',
                link: 'lessons/lesson4/translations/index.html'
            },
            '2': {
                icon: 'fab fa-github',
                label: 'Repository',
                link: 'https://github.com/NiccoloSegato/polimi-informatica-applicata/tree/main/lessons/lesson4/translations'
            }
        }
    }
}

function openPopup(id) {
    var popup = document.getElementById('popup-details');
    var image = document.getElementById('popup-image');
    var title = document.getElementById('popup-title');
    var description = document.getElementById('popup-description');
    document.getElementById('overlay').style.display = 'block';
    
    popup.style.display = 'block';
    
    image.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 1)), url('" + dictionary[id].image + "')";
    title.innerHTML = dictionary[id].title;
    description.innerHTML = dictionary[id].description;

    createLinks(id);
}

function createLinks(id) {
    // Remove the previous links
    var links = document.getElementById('popup-links');
    links.innerHTML = '';

    // Create the new links
    for (var key in dictionary[id].links) {
        var link = document.createElement('a');
        link.href = dictionary[id].links[key].link;
        link.innerHTML = '<i class="' + dictionary[id].links[key].icon + '"></i> ' + dictionary[id].links[key].label;
        link.target = '_blank';
        links.appendChild(link);
    }
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup-details').style.display = 'none';
}