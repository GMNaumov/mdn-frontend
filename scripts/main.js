const myImage = document.querySelector("img");

myImage.onclick = () => {
    const myScr = myImage.getAttribute("src");
    if (myScr === "images/logo.png") {
        myImage.setAttribute("src", "images/logo2.png")
    } else {
        myImage.setAttribute("src", "images/logo.png");
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}