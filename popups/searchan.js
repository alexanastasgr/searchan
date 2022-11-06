const query = document.getElementById('query')
const search = document.getElementById('btnsearch')
const icbox = document.querySelector('.iconbox')
const icon = document.querySelector('.iconbox img')
let action = "gg"



/* ----------------------------------
   Initialize Shortcodes as Objects
*/
const icons = {
    gg: {
        icon: '../assets/icons/google.png',
        title: 'Search on Google',
        endpoint: 'https://www.google.com/search?q='
    },
    gh: {
        icon: '../assets/icons/github.png',
        title: 'Search on GitHub',
        endpoint: 'https://github.com/search?q='
    },
    yt: {
        icon: '../assets/icons/youtube.png',
        title: 'Search on YouTube',
        endpoint: 'https://www.youtube.com/results?search_query='
    },

    sk: {
        icon: '../assets/icons/skroutz.png',
        title: 'Search on Skroutz',
        endpoint: 'https://www.skroutz.gr/search?keyphrase='
    },

    pkg: {
        icon: '../assets/icons/packagist.png',
        title: 'Search for packages',
        endpoint: 'https://packagist.org/?query='
    },


    npm: {
        icon: '../assets/icons/npm.png',
        title: 'Search for NPM packages',
        endpoint: 'https://www.npmjs.com/search?q='
    },
}

/* When popup loads always select Google as Search engine */
document.addEventListener('DOMContentLoaded', () => {
    query.value = ""
    icbox.style.backgroundColor = "#ffffff"
    icon.src = icons.gg.icon
    document.getElementById("query").placeholder = icons.gg.title
})







function initializeListener(e) {
    let shortcut = e.target.value

    switch (shortcut) {

        // Youtube shortcode
        case 'yt':

            action = "yt"
            query.value = ""
            icbox.style.backgroundColor = "#cf2200"
            icon.src = icons.yt.icon
            document.getElementById("query").placeholder = icons.yt.title
            break;

        // Google shortcode
        case 'gg':

            action = "gg"
            query.value = ""
            icbox.style.backgroundColor = "#ffffff"
            icon.src = icons.gg.icon
            document.getElementById("query").placeholder = icons.gg.title
            break;

        // GitHub shortcode
        case 'gh':

            action = "gh"
            query.value = ""
            icbox.style.backgroundColor = "#000"
            icon.src = icons.gh.icon
            document.getElementById("query").placeholder = icons.gh.title
            break;

        // Skroutz shortcode
        case 'sk':

            action = "sk"
            query.value = ""
            icbox.style.backgroundColor = "#f58d24"
            icon.src = icons.sk.icon
            document.getElementById("query").placeholder = icons.sk.title
            break;


        // Packagist shortcode
        case 'pkg':

            action = "pkg"
            query.value = ""
            icbox.style.backgroundColor = "#f58d24"
            icon.src = icons.pkg.icon
            document.getElementById("query").placeholder = icons.pkg.title
            break;


        // NPM shortcode
        case 'npm':

            action = "npm"
            query.value = ""
            icbox.style.backgroundColor = "#cc0000"
            icon.src = icons.npm.icon
            document.getElementById("query").placeholder = icons.npm.title
            break;

        // About shortcode
        case 'about':
            window.open('https://github.com/alexanastasgr', '_blank')
            break;

        // help shortcode
        case 'help':
            window.open('https://docs.alexanas.gr/searchan', '_blank')
            break;
    }
}



query.addEventListener('input', initializeListener)

window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        searchFunction()
    }
});


search.addEventListener('click', searchFunction)


function searchFunction() {
    const searchURL = icons[action].endpoint + query.value
    window.open(searchURL, "_blank");
}

