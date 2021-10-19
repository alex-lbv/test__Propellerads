import {formatTime} from './format-time.js';
import {timeElapsed, video} from '../const.js';

export const updateTimeElapsed = () => {
  const time = formatTime(Math.round(video.currentTime));
  timeElapsed.innerText = `${time.hours}:${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute('datetime', `${time.hours}h ${time.minutes}m ${time.seconds}s`)
};
