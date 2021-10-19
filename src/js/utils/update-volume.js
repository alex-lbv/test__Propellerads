import {video, volume} from '../const.js';

export const updateVolume = () => {
  if (video.muted) {
    video.muted = false;
  }

  video.volume = volume.value;
};
