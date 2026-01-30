//! selecte the target element.
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("Generatebtn");

//! 2. create new html elements (document.createElement());
function createProfileCard() {
  //create the profile card container
  const profileCard = document.createElement("div");
  //add class
  profileCard.className = "profile-card";
  //create img element profile card
  const profileImage = document.createElement("img");
  //add img to created image element
  profileImage.src =
    "https://cdn.pixabay.com/photo/2023/08/17/18/59/ai-generated-8197193_960_720.jpg";

  //create the haading element
  const profileName = document.createElement("h3");
  profileName.textContent = "Vishwas Saurabh";

  //craete a paragraph element for the desc
  const profileDescription = document.createElement("p");
  profileDescription.textContent =
    "A Passionate web developer with experience in javascript and Reacts";

  //! 3. Add content to the element created (innerHTML/Textcontent).
  //!4. ADD classes or id if needed // add any attribute.

  //appened all the element to the profile card
 //! 5. Appened the element to build the structure.
  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileDescription);

  //appened the profile card to the container
  //! appened to the Dom
  appContainer.appendChild(profileCard); 
}


//addd event listener
generateBtn.addEventListener('click', createProfileCard);

