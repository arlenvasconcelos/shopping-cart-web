const calculateTimeLeft = (time) => {
  const actual = new Date().getTime();
  const difference = time - actual;

  console.log(time, 'oioi', actual);

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default calculateTimeLeft;
