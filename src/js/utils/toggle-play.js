import {video} from '../const.js';
import {isRegistered, registration} from './validation.js';

export const togglePlay = () => {
  if (!isRegistered) {
    registration();
  }

  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
};
