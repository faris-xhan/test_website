let myImage = document.querySelector("img");

myImage.onclick = function() {
   let mySrc = myImage.getAttribute("src");
   if (mySrc === "images/tom.jpg") {
      myImage.setAttribute("src", "images/tom2.jpg");
   } else {
      myImage.setAttribute("src", "images/tom.jpg");
   }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
   let userName = prompt("Enter you're name: ");
   if(!userName){ 
      myHeading.textContent = "This is test website"
   } else {
      localStorage.setItem("name", userName);
      myHeading.textContent = "How you doing, " + userName;
   }
}

if (!localStorage.getItem("name")) {
   setUserName()
} else {
   let storedName = localStorage.getItem("name");
   myHeading.textContent = "How you doing, " + storedName;
}

myButton.onclick = function() {
   setUserName();
}

