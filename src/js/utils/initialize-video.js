import {progressBar, seek, video} from '../const.js';
import {formatTime} from './format-time.js';

export const initializeVideo = () => {
  const videoDuration = Math.round(video.duration);
  seek.setAttribute('max', videoDuration);
  progressBar.setAttribute('max', videoDuration);
};
