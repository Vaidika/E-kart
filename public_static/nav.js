/**
 * Created by Vaidika Tibrewal on 4/19/2017.
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function plusDivs(n) {
    conole.log("thg");
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    //var slideIndex = 1;

    var x = document.getElementsByClassName("slideshow");
conole.log("thg");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        //console.log(x[i])
    }
    //console.log(x[0])
    x[slideIndex-1].style.display = "block";
}