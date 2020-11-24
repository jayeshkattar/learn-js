//async and await

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

async function displayuser() {
  try {
    const loggedUser = await loginuser("drav@gmail.com", 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log(err.message);
  }
}

displayuser();

console.log("Finish");
