//! ======Temperature Converter=======
//create a project that convert celcius to fahrenheit and
// vice versa . use if statements to validate input (e.g, it should a number).

document.getElementById("convertbutton").addEventListener("click", function () {
  //get the value from temoerature input
  const temperature = parseInt(document.getElementById("temperature").value);

  //get the value from select input
  const converttype = document.getElementById("conversiontype").value;

  //select where to display the result
  const result = document.getElementById("result");

  //clear the previous result div
  result.innerHTML = "";

  //validate the user
  if (isNaN(temperature)) {
    result.innerHTML = "please enter a valid number for the temperature";
    return;
  }

  //conversion logic
  let convertedtemperature;
  if (converttype == "Celsius") {
    convertedtemperature = (temperature - 32) * (5 / 9);
    result.innerHTML = `${temperature}°F is equal to ${convertedtemperature.toFixed(2)}°C`;
  } else if (converttype == "fahrenheit") {
    convertedtemperature = (temperature * 9) / 5 + 32;
    result.innerHTML = `${temperature}°C is equal to ${convertedtemperature.toFixed(2)}°F`;
  }
});
