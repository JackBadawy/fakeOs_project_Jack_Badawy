//for our first coding sesh on this project I will set
//an 8-bit image as the background image #DONE!

let bodyEl = document.getElementById("body");

//will use this to name classes and id's
let desktopIconCount = 0;

//body background image display properties
bodyEl.style.backgroundImage = "url(wallpapers/Clouds.bmp)";
bodyEl.style.backgroundSize = "cover";
bodyEl.style.minHeight = "100vh";
bodyEl.style.overflow = "hidden";

//move to top of page
let mainContainer = document.createElement("div");

/* lets get the basics of our 3 icons established, lets try to make them 
use classes */

initializeMainDesktopIconContainer();

function initializeMainDesktopIconContainer() {
  mainContainer.id = "desktopIconContainer";
  mainContainer.className = "body__desktop";
  mainContainer.style.display = "flex";
  mainContainer.style.flexDirection = "column";
  bodyEl.appendChild(mainContainer);
}

class desktopIcon {
  constructor(fileName, imageNumber) {
    this.fileName = fileName;
    this.imageNumber = imageNumber;
  }
}

placeholderCreateDesktopIcon();
placeholderCreateDesktopIcon();
placeholderCreateDesktopIcon();
//move this inside class when done
function placeholderCreateDesktopIcon() {
  let newIconContainer = document.createElement("div");
  //class will contain number that counts how many icons there are
  //for dynamic id's
  newIconContainer.id = "iconOneContainer";
  newIconContainer.className = "body__desktop__icon";
  let newIconImage = document.createElement("img");
  newIconImage.src = "desktop_icons/placeholder_file_icon.png";
  newIconImage.className = "body__desktop__image";
  newIconContainer.appendChild(newIconImage);

  //adds file name
  let newIconName = document.createElement("p");
  newIconName.textContent = "Text File";
  newIconName.className = "body__desktop__file-name";
  newIconContainer.appendChild(newIconName);

  mainContainer.appendChild(newIconContainer);
}

//we will use event listeners for icon highlighting and program opening
//as a test we will add event listerner to all icons before trying
//individually

//icon highlighting
let lastIcon;
mainContainer.addEventListener("click", function (e) {
  //have a variable that keeps track of the last icon selected

  console.log(e.target);
  e.target.style.backgroundColor = "rgba(1, 197, 197, 0.373)";
  if (lastIcon) {
    lastIcon.style.backgroundColor = "";
  }
  lastIcon = e.target;
});
