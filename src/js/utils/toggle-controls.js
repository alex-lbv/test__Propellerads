import {video, videoControls} from '../const.js';

export const hideControls = () => {
  if (video.paused) {
    return;
  }

  videoControls.classList.add('hide');
};

export const showControls = () => {
  videoControls.classList.remove('hide');
}
