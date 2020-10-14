const secondHand = document.querySelector('#second'),
      minuteHand = document.querySelector('#minute'),
      hourHand = document.querySelector('#hour');

const moveSecondHand = () => {

const t = Date.parse(new Date()) + 10800000;

const seconds = Math.floor((t/1000)%60),
      minutes = Math.floor((t/1000/60)%60),
      hours = Math.floor((t/(1000*60*60)%24));
      console.log(hours, minutes, seconds);

    secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${90 + minutes * 6}deg)`;
    hourHand.style.transform = `rotate(${90 + hours * 30}deg)`;

};

setInterval(moveSecondHand, 1000);

// variant 2

// const maxMinute = 60;
// let secondCounter = 0,
//     minuteCounter = 0,
//     hourCounter = 0;

// const moveSecondHand = setInterval(() => {
//     secondCounter++;
//     secondHand.style.transform = `rotate(${90 + secondCounter * 6}deg)`;

//     if (secondCounter === maxMinute) {
//         secondCounter = 0;
//         moveMinuteHand();
//     }

// }, 1000);

// const moveMinuteHand = () => {
//     minuteCounter++;
//     minuteHand.style.transform = `rotate(${90 + minuteCounter * 6}deg)`;

//     if (minuteCounter === maxMinute) {
//         minuteCounter = 0;
//         moveHourHand();
//     }
// };

// const moveHourHand = () => {
//     hourCounter++;
//     hourHand.style.transform = `rotate(${90 + hourCounter * 30}deg)`;

//     if (hourCounter === 24) {
//         hourCounter = 0;
//     }
// };