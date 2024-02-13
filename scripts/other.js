if (window.performance) {

    // remove the scrolling when reloading...........
    if (window.location.href.includes('#')) {
        console.log('id')
        var url = window.location.href.split('#')[0]
        window.location.href = url
    }
}

fetch('https://api.github.com/user').then(function(response) {
    console.log(response)
})
//window.location.href = 'https://github.com/login/oauth/authorize?client_id=33a703d019e0d23730ea'