/*
formatTime takes a time length in seconds and returns the time in minutes and seconds
*/

export const formatTime = (timeInSeconds) => {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    hours: result.substr(0, 2),
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};
