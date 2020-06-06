//* Get Our Elements *//
const player = document.querySelector(".player");
//console.log(player);
// console.log(player.querySelector(".viewer"));
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// TODO: fullScreen button
const fullScreen = player.querySelector(".full_screen");
// console.log(fullScreen);

//* Build out functions *//

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  // console.log("Update the button");
  const icon = this.paused ? "▶︎" : "❚ ❚";
  // console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  // console.log("Skipping!");
  // console.dir(video);
  // console.dir(currentTime);
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

// console.dir(progressBar.style);

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  // console.log(progressBar);
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  // console.log(e); // mouseEvent
}

function fullscreen() {
  if (!video.fullscreenElement) {
    // console.log(video);
    video.requestFullscreen();
  } else {
    if (video.exitFullscreen) {
      video.exitFullscreen();
    }
  }
}
//* Hook up the event listners *//
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
// (cf) video.addEventListener("progress", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
// solution #1
// progress.addEventListener("mousemove", () => {
//   if (mousedown) {
//     scrub();
//   }
// });
// solution #2
// if 'mousedown' is true, then moves to scrub(e)
// if 'mousedown' is false, return false
progress.addEventListener("mousemove", (e) => {
  mousedown && scrub(e);
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreen.addEventListener("click", fullscreen);
