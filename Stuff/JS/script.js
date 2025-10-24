/* Set the width of the sidebar to 300px and the left margin of the page content to 300px */
function openNav() {
  // open sidebar as an overlay (do not move the main content)
  document.getElementById("mySidebar").style.width = "300px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  // close sidebar
  document.getElementById("mySidebar").style.width = "0";
}