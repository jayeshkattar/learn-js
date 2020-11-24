//Async request
console.log("Start");

function loginuser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we have the data");
      resolve({ userEmail: email });
      reject(new Error("Invalid user"));
    }, 2000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we got videos");
      resolve(["Video1", "Video2"]);
      reject(new Error("No videos for this user"));
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of " + video);
      reject(new Error("No details"));
    }, 1000);
  });
}

loginuser("drav@gmail.com", 12345)
.then(user => getUserVideos(user.userEmail))
.then(videos => videoDetails(videos[0]))
.then(details => console.log(details))

//To run all async data at the same time, use Promise.all([func1, func2]).then(result => clg(result))

console.log("Finish");
