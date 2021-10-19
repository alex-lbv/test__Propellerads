import {progressBar, seek, video} from '../const.js';

export const updateProgress = () => {
  seek.value = Math.floor(video.currentTime);
  progressBar.value = Math.floor(video.currentTime);
}
