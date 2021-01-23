// function menu() {
//     document.querySelector('.menu').classList.toggle('open');
//     document.querySelector('.navbar__burger').classList.toggle('open');
// }

$(document).ready(function () {
    $('.navbar__burger').click(function (event) {
        $('.menu').toggleClass('open');
        $('.navbar__burger').toggleClass('open');
    });
});
