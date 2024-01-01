let bodyEl = document.getElementById("body");
let desktopIconCount = 0;
let mainContainer = document.createElement("main");
let bottomBar = document.createElement("footer");
let startBtn = document.createElement("button");
let timeBox = document.createElement("div");

initializeMainDesktopIconContainer();

function initializeMainDesktopIconContainer() {
  mainContainer.id = "desktopIconContainer";
  mainContainer.className = "body__desktop";
  bodyEl.appendChild(mainContainer);
}

//call initfooter here
initializeFooterBar();
function initializeFooterBar() {
  bottomBar.id = "footerBottomBar";
  bottomBar.className = "bottom-bar";
  bodyEl.appendChild(bottomBar);
}

//start button initialization
initializeStartButton();
function initializeStartButton() {
  startBtn.id = "startBtn";
  startBtn.className = "bottom-bar__start-btn";

  let startBtnImg = document.createElement("img");
  startBtnImg.src = "desktop_icons/start_btn_img.png";
  startBtnImg.className = "bottom-bar__start-btn__image";
  startBtn.appendChild(startBtnImg);

  let startBtnTxt = document.createElement("p");
  startBtnTxt.className = "bottom-bar__start-btn__txt";
  startBtnTxt.textContent = "Start";

  startBtn.appendChild(startBtnTxt);

  bottomBar.appendChild(startBtn);
}

// function to update the date and time
InitializeTimeBox();
function updateDateTime() {
  const time = new Date();

  const currentDateTime = time.toLocaleString();

  document.querySelector("#time").textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);

function InitializeTimeBox() {
  timeBox.id = "timeBox";
  timeBox.className = "bottom-bar__time-box";

  let timeBoxTxt = document.createElement("p");
  const time = new Date();
  timeBoxTxt.textContent = time.toLocaleString();
  timeBoxTxt.className = "bottom-bar__time-box__txt";
  timeBoxTxt.id = "time";

  timeBox.appendChild(timeBoxTxt);

  bottomBar.appendChild(timeBox);

  timeBox.style.display = "flex";
  timeBox.style.alignItems = "center";
}

function placeholderCreateDesktopIcon() {
  let newIconContainer = document.createElement("button");
  //class will contain number that counts how many icons there are
  //for dynamic id's
  newIconContainer.id = `iconContainer${fileCount}`;
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

  fileCount++;
}

//desktop file creation
let fileCount = 1;
createIcon(1, 1);
createIcon(2, 1);
createIcon(3, 1);

function createIcon(type, location) {
  let newIconContainer = document.createElement("button");

  newIconContainer.id = `iconContainer${fileCount}`;
  newIconContainer.className = "body__desktop__icon";
  let newIconImage = document.createElement("img");

  newIconImage.className = "body__desktop__image";
  newIconContainer.appendChild(newIconImage);

  //adds file name
  let newIconName = document.createElement("p");
  newIconName.className = "body__desktop__file-name";
  let destination = 0;

  if (location === 1) {
    destination = mainContainer;
  } else if (location === 2) {
    destination = modalfileContainer;
  }

  if (type === 1) {
    newIconName.textContent = "Image";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/placeholder_file_icon.png";
    destination.appendChild(newIconContainer);
  } else if (type === 2) {
    newIconName.textContent = "Text File";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/text_file_icon.png";
    destination.appendChild(newIconContainer);
  } else if (type === 3) {
    newIconName.textContent = "folder";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/folder.png";
    destination.appendChild(newIconContainer);
  }

  fileCount++;
}

//modal variables/basic element prep
let modalOpen = false;
let btnOne = document.getElementById("iconContainer1");
let fileOneModal = document.createElement("div");
let exitBtn = document.createElement("button");
fileOneModal.className = "file-modal";
fileOneModal.id = "fileOneModal";
let btnTwo = document.getElementById("iconContainer2");
let fileTwoModal = document.createElement("div");
fileTwoModal.className = "file-modal";
fileTwoModal.id = "fileTwoModal";
let btnThree = document.getElementById("iconContainer3");
let fileThreeModal = document.createElement("div");
let modalfileContainer = document.createElement("div");
fileThreeModal.className = "file-modal";
fileThreeModal.id = "fileThreeModal";
let folderFileCount = 1;
let createFoldersHasFired = false;
let createStartHasFired = false;
let startFileCount = 1;
let startContainer;
let startModal;
let startClick = 0;

//events to create modals
btnOne.addEventListener("dblclick", function () {
  if (modalOpen === false) {
    let modalBar = document.createElement("div");
    modalBar.id = "modalOneBar";
    modalBar.className = "file-modal__top-bar";

    fileOneModal.appendChild(modalBar);

    let modalImg = document.createElement("img");
    modalImg.src = "desktop_icons/Windows_95_fileOne.svg";

    exitBtn.className = "file-modal__exit-btn";
    exitBtn.textContent = "X";
    modalBar.appendChild(exitBtn);

    fileOneModal.appendChild(modalImg);

    bodyEl.appendChild(fileOneModal);

    modalOpen = true;
  }
});
btnTwo.addEventListener("dblclick", function () {
  if (modalOpen === false) {
    let modalBar = document.createElement("div");
    modalBar.id = "modalTwoBar";
    modalBar.className = "file-modal__top-bar";

    fileTwoModal.appendChild(modalBar);

    let modalTxtArea = document.createElement("textarea");
    modalTxtArea.id = "modalTwoTxtArea";
    modalTxtArea.className = "file-modal__txt-area";
    modalTxtArea.textContent = "This is a text File";

    exitBtn.className = "file-modal__exit-btn";
    exitBtn.textContent = "X";
    modalBar.appendChild(exitBtn);

    fileTwoModal.appendChild(modalTxtArea);

    bodyEl.appendChild(fileTwoModal);

    modalOpen = true;
  }
});
btnThree.addEventListener("dblclick", function () {
  if (modalOpen === false) {
    let modalBar = document.createElement("div");
    modalBar.id = "modalThreeBar";
    modalBar.className = "file-modal__top-bar";

    fileThreeModal.appendChild(modalBar);

    exitBtn.className = "file-modal__exit-btn";
    exitBtn.textContent = "X";
    modalBar.appendChild(exitBtn);

    modalfileContainer.id = "modalFileContainer";
    modalfileContainer.className = "file-modal__file-container";
    fileThreeModal.appendChild(modalfileContainer);

    if (createFoldersHasFired === false) {
      createFolderItem(1);
      createFolderItem(2);
    }

    bodyEl.appendChild(fileThreeModal);
    modalOpen = true;
  }
});

//some modal dom interactions to populate with elements
function createFolderItem(type) {
  createFoldersHasFired = true;
  let newIconContainer = document.createElement("button");

  newIconContainer.id = `folderIconContainer${fileCount}`;
  newIconContainer.className = "body__folder__icon";
  let newIconImage = document.createElement("img");

  newIconImage.className = "body__folder__image";
  newIconContainer.appendChild(newIconImage);

  let newIconName = document.createElement("p");
  newIconName.className = "body__folder__file-name";

  if (type === 1) {
    newIconName.textContent = "Image.png";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/placeholder_file_icon.png";
    modalfileContainer.appendChild(newIconContainer);
  } else if (type === 2) {
    newIconName.textContent = "Text-File.txt";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/text_file_icon.png";
    modalfileContainer.appendChild(newIconContainer);
  } else if (type === 3) {
    newIconName.textContent = "folder";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/folder.png";
    modalfileContainer.appendChild(newIconContainer);
  }

  folderFileCount++;
}

function createStartItem(type) {
  createStartHasFired = true;
  let newIconContainer = document.createElement("button");

  newIconContainer.id = `folderIconContainer${fileCount}`;
  newIconContainer.className = "bottom-bar__start-btn__icon";
  let newIconImage = document.createElement("img");

  newIconImage.className = "bottom-bar__start-btn__icon__image";
  newIconContainer.appendChild(newIconImage);

  let newIconName = document.createElement("p");
  newIconName.className = "bottom-bar__start-btn__icon__file-name";

  if (type === 1) {
    newIconName.textContent = "Image";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/placeholder_file_icon.png";
    startContainer.appendChild(newIconContainer);
  } else if (type === 2) {
    newIconName.textContent = "Text File";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/text_file_icon.png";
    startContainer.appendChild(newIconContainer);
  } else if (type === 3) {
    newIconName.textContent = "Folder";
    newIconContainer.appendChild(newIconName);
    newIconImage.src = "desktop_icons/folder.png";
    startContainer.appendChild(newIconContainer);
  }

  startFileCount++;
}

//exit and start button functionality
exitBtn.addEventListener("click", function () {
  fileOneModal.innerHTML = "";
  fileOneModal.remove();
  fileTwoModal.innerHTML = "";
  fileTwoModal.remove();
  fileThreeModal.innerHTML = "";
  fileThreeModal.remove();
  modalOpen = false;
});

startBtn.addEventListener("click", function () {
  startClick = startClick + 1;

  if (startClick === 1) {
    startModal = document.createElement("div");
    startModal.id = "startModal";
    startModal.className = "bottom-bar__start-btn__modal";

    let winLogoBar = document.createElement("div");
    winLogoBar.className = "bottom-bar__start-btn__modal__logo";

    let t1 = document.createElement("p");
    t1.className = "bottom-bar__start-btn__modal__logo__t1";
    t1.textContent = "Windows";
    let t2 = document.createElement("p");
    t2.className = "bottom-bar__start-btn__modal__logo__t2";
    t2.textContent = "95";

    winLogoBar.appendChild(t1);
    winLogoBar.appendChild(t2);

    startModal.appendChild(winLogoBar);

    startContainer = document.createElement("div");
    startContainer.className = "bottom-bar__start-btn__modal__container";
    startModal.appendChild(startContainer);

    createStartItem(1);
    createStartItem(2);
    createStartItem(3);

    bodyEl.appendChild(startModal);
  } else {
    /* startModal.innerHTML = ""; */
    startModal.remove();
    startClick = 0;
  }
});
