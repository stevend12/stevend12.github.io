function menuToggle()
{
  var menu = document.getElementsByTagName("nav");
  if(menu[0].style.display == "block") menu[0].style.display = "none";
  else menu[0].style.display = "block";
}
function menuResize()
{
  var menu = document.getElementsByTagName("nav");
  menu[0].style.display = "";
}
window.addEventListener('resize', menuResize);
