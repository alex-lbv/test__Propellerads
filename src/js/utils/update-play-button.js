import {playbackIcons, playButton, video} from '../const.js';

export const updatePlayButton = () => {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

  if (video.paused) {
    playButton.setAttribute('data-title', 'Play')
  } else {
    playButton.setAttribute('data-title', 'Pause')
  }
};
