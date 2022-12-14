// Convert time to hours and minutes
export const calcTime = (time: number): string => {
    let minutes = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < '10' ? '0' : '') + seconds;
  };