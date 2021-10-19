import {togglePlay} from './utils/toggle-play.js';
import {updatePlayButton} from './utils/update-play-button.js';
import {
  fullscreenButton,
  playButton,
  seek,
  video,
  videoContainer,
  videoControls,
  volume,
  volumeButton
} from './const.js';
import {initializeVideo} from './utils/initialize-video.js';
import {updateTimeElapsed} from './utils/update-time-elapsed.js';
import {updateProgress} from './utils/update-progress.js';
import {updateSeekTooltip} from './utils/update-seek-tooltip.js';
import {skipAhead} from './utils/skip-ahead.js';
import {updateVolume} from './utils/update-volume.js';
import {updateVolumeIcon} from './utils/update-volume-icon.js';
import {toggleMute} from './utils/toggle-mute.js';
import {animatePlayback} from './utils/animate-playback.js';
import {toggleFullScreen} from './utils/toggle-full-screen.js';
import {updateFullscreenButton} from './utils/update-fullscreen-button.js';
import {hideControls, showControls} from './utils/toggle-controls.js';

const videoWorks = !!document.createElement('video').canPlayType;

if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

const appInit = () => {
  playButton.addEventListener('click', togglePlay);
  video.addEventListener('play', updatePlayButton);
  video.addEventListener('pause', updatePlayButton);
  video.addEventListener('loadedmetadata', initializeVideo);
  video.addEventListener('timeupdate', updateTimeElapsed);
  video.addEventListener('timeupdate', updateProgress);
  seek.addEventListener('mousemove', updateSeekTooltip);
  seek.addEventListener('input', skipAhead);
  volume.addEventListener('input', updateVolume);
  video.addEventListener('volumechange', updateVolumeIcon);
  volumeButton.addEventListener('click', toggleMute);
  video.addEventListener('click', togglePlay);
  video.addEventListener('click', animatePlayback);
  fullscreenButton.onclick = toggleFullScreen;
  videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);
  video.addEventListener('mouseenter', showControls);
  video.addEventListener('mouseleave', hideControls);
  videoControls.addEventListener('mouseenter', showControls);
  videoControls.addEventListener('mouseleave', hideControls);
};

export default appInit;
