document.getElementById("soundbutton").addEventListener("click", function () {
  //the name of the animal from the input field
  const animal = document.getElementById("animalInput").value.toLowerCase();

  //sound output element
  const soundoutput = document.getElementById("soundoutput");

  //logic
  switch (animal) {
    case "dog":
      soundoutput.textContent = "Woof Woof!";
      break;
      
    case "cat":
      soundoutput.textContent = "Meow Meow!";
      break;

    case "sheep":
      soundoutput.textContent = "Baa Baa!";
      break;

    case "cow":
      soundoutput.textContent = "Moo Moo!";
      break;

    case "duck":
      soundoutput.textContent = "Quack Quack!";
      break;

    default:
      soundoutput.textContent = "Sorry I don't know that Animal Sound!";
      return;
  }
});
