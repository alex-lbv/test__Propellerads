import {videoContainer} from '../const.js';

export const toggleFullScreen = () => {
  closeFullScreen();
  openFullScreen();
};

const openFullScreen = () => {
  if (videoContainer.webkitRequestFullscreen) {
    // Need this to support Safari
    videoContainer.webkitRequestFullscreen();
  } else if (document.RequsetFullscreen) {
    videoContainer.requestFullscreen();
  }
};

export const closeFullScreen = () => {
  if (document.webkitFullscreenElement) {
    // Need this to support Safari
    document.webkitExitFullscreen();
  } else if (document.Fullscreen) {
    document.exitFullscreen();
  }
};
