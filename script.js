const timer = document.getElementById('timer');
const destination = new Date('December 31, 2023 20:00:00');
// const date = Math.abs(destination - new Date());
// const hours = Math.floor(date / 1000 / 60 / 60);
// const minutes = Math.floor((date / 1000 / 60 / 60 - hours) * 60);
// const seconds = ((date / 1000 / 60 / 60 - hours) * 60 - minutes) * 60;

setInterval(() => {
	const date = Math.abs(destination - new Date());
	const hours = Math.floor(date / 1000 / 60 / 60);
	const minutes = Math.floor((date / 1000 / 60 / 60 - hours) * 60);
	const seconds = Math.floor(((date / 1000 / 60 / 60 - hours) * 60 - minutes) * 60);

    timer.innerText = `${hours}:${minutes}:${seconds}s`
}, 100);

// console.log(timer);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

