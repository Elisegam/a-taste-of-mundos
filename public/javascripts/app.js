/*
---------------------------------------------------------------
AOS SCROLLING ANIME SCRIPT
---------------------------------------------------------------
*/
/*AOS.init({
  duration: 1500
});
*/

var container = document.querySelector(".bloc-favory");
if (container) {
  var msnry = new Masonry(container, {
    itemSelector: ".fav"
  });
}
