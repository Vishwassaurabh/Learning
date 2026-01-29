//slect the button and add event listener
document.getElementById("soundbutton").addEventListener("click", function () {

  //the name of the animal from the input field
  const animal = document.getElementById("animalInput").value.toLowerCase();

  //sound output result element
  const output = document.getElementById("soundoutput");

  //logic
  switch (animal) {
    case "dog":
      output.textContent = "Woof Woof!";
      break;

    case "cat":
      output.textContent = "Meow Meow!";
      break;

    case "sheep":
      output.textContent = "Baa Baa!";
      break;

    case "cow":
      output.textContent = "Moo Moo!";
      break;

    case "duck":
      output.textContent = "Quack Quack!";
      break;

    default:
      output.textContent = "Sorry I don't know that Animal Sound!";
      return;
  }
});
