/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

var x = false;

function openNav() {
    if(x == false) {
      document.getElementById("mySidebar").style.width = "250px";
      x = true;
    } else {
      document.getElementById("mySidebar").style.width = "50px";
      x = false;
    }
}
