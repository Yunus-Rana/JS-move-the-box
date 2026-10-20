const mybox = document.getElementById("mybox");

const moveamount = 15; //movement when keys pressed
let x = 600;
let y = 275;

// Reusable function to coordinate the box
function updatePosition() {
  mybox.style.left = `${x}px`;
  mybox.style.top = `${y}px`;
}

// setting the box in the almost middle of screen
updatePosition();

document.addEventListener("keydown", (event) => { // browser reads everytime anykey is pressed
  if (event.key.startsWith("Arrow")) { 
    event.preventDefault(); //preventing the webpage to be scrollable

    switch (event.key) {
      case "ArrowUp":
        y -= moveamount; // y = -15 initially as 0-15
        break;
      case "ArrowDown":
        y += moveamount;
        break;
      case "ArrowLeft":
        x -= moveamount;
        break;
      case "ArrowRight":
        x += moveamount;
        break;
    }



    //updating the values according to keys pressed
    updatePosition();

    // Dynamic feedback while moving
    mybox.textContent = "🐱‍👤"; // when the box moves, the style changes
    mybox.style.background = "#ec4899";
  }
});

document.addEventListener("keyup", (event) => { //when a key is released 
  if (event.key.startsWith("Arrow")) {
    // Reset back to idle state
    mybox.textContent = "🐱"; //resets back the css to original state
    mybox.style.background = "";
  }
});