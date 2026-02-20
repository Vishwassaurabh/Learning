//!sync === blocking code
// console.log("step 1: start boiling");
// console.log("step 2: ADD pasta to the pot");
// console.log("step 3: stir and wait for 10 minutes");
// console.log("step 4: Drain the pasta and serve");

// function blockingtask() {
//   console.log("step 1: start a long-runing task");
//   //simulate a blocking task
//   const startTime = Date.now();
//   while (Date.now() - startTime < 5000) {}

//   console.log("step 2: long-runing task finished");
// }
// console.log("before calling the blocking task");

// blockingtask();

// console.log("after the blocking task ");

//! Async code
// console.log("Task 1");

// setTimeout(() => {
//   console.log("Task 2 (Delay)");
// }, 2000);

// console.log("Task 3");

//*wheather  application
//*API (Mimic)
//*our frontend app

function fetchData(callback) {
  //operation API(mimic)
  console.log("fetching weather data....");
  //API - simulating async operation(http)
  setTimeout(() => {
    console.log("weathere data fetched successfully");
    callback();
  }, 2000);
}

function processData() {
  console.log(
    "processing the weather data to display temperature and conditions",
  );
}

//!Invoke data
// fetchData(processData);

//! components of  HTTP Request
//HTTP: Hypertext Transfer protocol
//?. Method (HTTP Verb)
//Get - Retrieve data
//post - sending data to server
//put - Update
//Delete- Deleting
//?URL-Uniform Resource Locator - https://Example.com  // API
//? Headers
//? body

// HTTP Client
// fetch -default
// axios - third party

//?making Http request
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json().then((posts) => {
//       console.log("posts fetched successfully", posts);
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching posts", error);
//   });

//?fetch user details - API
function fetchUserData(callback) {
  //make real http request
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then((response) => {
      return response.json().then((userData) => {
        console.log("user details fetched ", userData);
        //call back
        callback(userData.id);
      });
    })
    .catch((error) => {
      console.log("error fetching user", users);
    });
}

//?user posts- https://jsonplaceholder.typicode.com/posts?userId=2

function fetchuserPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      return response.json().then((posts) => {
        console.log("users posts", posts);
      });
    })
    .catch((error) => {
      console.log("error fetching user", users);
    });
}

// fetchUserData(fetchuserPosts);

//! 1. create the promise
const mypromise = new Promise((resolve, reject) => {
  //perform async task
  let success = true;
  if (success) {
    resolve("operation successfull"); //fulfilled
  } else {
    reject("operation failed");
  }
});

// //! 2. consume the promise
// mypromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! promise example
//!create promise
//! 2.consume promise

// const FetchDatapromise = fetch("https://jsonplaceholder.typicode.com/albums");

// //consume
// FetchDatapromise.then((response) => {
//   return response.json().then((data) => {
//     console.log(data);
//   });
// }).catch((error) => {
//   console.log(error);
// });

// fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
//   return response.json().then((data) => {
//     console.log(data);
//   });
// }).catch((error) => {
//   console.log(error);
// });

//!Async Await

async function fetchAlbums() {
  try {
    // success
    const albumsRespones = await fetch(
      "https://jsonplaceholder.typicode.com/albums",
    );
    const albums = await albumsRespones.json();
    console.log(albums);
  } catch (error) {
    //failure
    console.log(error);
  }
}
fetchAlbums();
