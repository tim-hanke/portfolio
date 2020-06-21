function navToggler() {
    document.getElementById("navbar").classList.toggle("transparent");
    let links = document.getElementsByClassName("navlinks");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("hidden");
    }
}