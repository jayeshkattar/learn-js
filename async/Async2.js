//Async request
console.log("Start");

function loginuser(email, password, callback) {
  setTimeout(() => {
    console.log("we have the data");
    callback({ userEmail: email });
  }, 2000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["Video1", "Video2"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of " + video);
  }, 1000);
}

//below stacking is known as callback hell
loginuser("drav@gmail.com", 12345, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (video) => {
      console.log(video);
    });
  });
});

console.log("Finish");
