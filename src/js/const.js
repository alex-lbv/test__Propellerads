export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const video = document.querySelector('.player__video');
export const videoControls = document.querySelector('.player__video-controls');
export const playButton = document.querySelector('.player__play');
export const timeElapsed = document.querySelector('.player__time-elapsed');
export const progressBar = document.querySelector('.player__progress-bar');
export const seek = document.querySelector('.player__seek');
export const seekTooltip = document.querySelector('.player__seek-tooltip');
export const volumeButton = document.querySelector('.player__volume-button');
export const volumeIcons = document.querySelectorAll('.player__volume-button use');
export const volumeMute = document.querySelector('use[href="#volume-mute"]');
export const volumeLow = document.querySelector('use[href="#volume-low"]');
export const volumeHigh = document.querySelector('use[href="#volume-high"]');
export const volume = document.querySelector('.player__volume');
export const playbackAnimation = document.querySelector('.player__playback-animation');
export const fullscreenButton = document.querySelector('.player__fullscreen-button');
export const videoContainer = document.querySelector('.player');
export const fullscreenIcons = fullscreenButton.querySelectorAll('use');
export const popupElement = document.querySelector('.popup');
export const formRegistration = popupElement.querySelector('form');
export const formRegistrationInput = formRegistration.querySelector('#email');
export const playbackIcons = document.querySelectorAll('.playback-icons use');
