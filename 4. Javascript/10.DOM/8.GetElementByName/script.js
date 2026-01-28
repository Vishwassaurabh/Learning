function collectData() {
  const languageproficiency = document.getElementsByName("languageproficiency");
  console.log(languageproficiency);

  // Loop through the NodeList to find selected radio button
  for (let i = 0; i < languageproficiency.length; i++) {
    if (languageproficiency[i].checked) {
      console.log(languageproficiency[i].value);
    }
  }
  //log all elements with the name email
  const email = document.getElementsByName("email");
  console.log(email);
}
