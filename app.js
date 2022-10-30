/*  
    The animation is handled with the css.

    The javascript allows to close the <details> when clicked outside.
*/

const expand = document.querySelector("details");

document.addEventListener("click", function (e) {
  let insideElement = expand.contains(e.target);

  if (!insideElement) {
    expand.removeAttribute("open");
  }
});