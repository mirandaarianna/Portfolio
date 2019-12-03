function onReady() {

let mainNav = document.getElementById('js_menu');
let navBarToggle = document.getElementById('js_navbar_toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});
}
