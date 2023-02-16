const dayCount = document.getElementById('days');
const hourCount = document.getElementById('hours');
const minuteCount = document.getElementById('minutes');
const secondCount = document.getElementById('seconds');
const destination = new Date('December 31, 2023 20:00:00');
// const date = Math.abs(destination - new Date());
// const hours = Math.floor(date / 1000 / 60 / 60);
// const minutes = Math.floor((date / 1000 / 60 / 60 - hours) * 60);
// const seconds = ((date / 1000 / 60 / 60 - hours) * 60 - minutes) * 60;

setInterval(() => {
	const date = Math.abs(destination - new Date());
	const days = Math.floor(date / 1000 / 60 / 60 / 24);
	const hours = Math.floor((date / 1000 / 60 / 60 / 24 - days) * 24);
	const minutes = Math.floor((((date / 1000 / 60 / 60 / 24 - days) * 24) - hours) * 60);
	const seconds = Math.floor(((((date / 1000 / 60 / 60 / 24 - days) * 24) - hours) * 60 - minutes) * 60);
	

	dayCount.innerText = `${days} dni`;
	hourCount.innerText = `${hours} godzin`;
	minuteCount.innerText = `${minutes} minut`;
	secondCount.innerText = `${seconds} sekund`;
}, 100);

// console.log(timer);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
