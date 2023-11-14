let size = 86;
let columns = Array.from(document.getElementsByClassName('column'));
let d, c;
let classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
let use24HourClock = true;

function padClock(p, n) {
	return p + ('0' + n).slice(-2);
}

function getClock() {
	d = new Date();
	return [
		use24HourClock ? d.getHours() : (d.getHours() % 12 || 12),
		d.getMinutes(),
		d.getSeconds()
	]
		.reduce(padClock, '');
}

function getClass(n, i2) {
	return classList.find((class_, classIndex) => Math.abs(n - i2) === classIndex) || '';
}


let _n = 0;
function get_n() {
	_n += 1;
	if (_n == 10)
		_n = 0;

	return _n;
}

/*
setInterval(
() => {
columns.forEach((ele, i) => {
		n = get_n();
		let offset = -n * size;
		ele.style.transform = `translateY(calc(50vh + ${offset}px - ${size / 2}px))`;
		Array.from(ele.children).forEach((ele2, i2) => {
			ele2.className = 'num ' + getClass(n, i2);
		});
	});
}
, 1000);
*/

//console.log("cols", columns)

function set_col(index, number) {
	n = number
	let offset = -n * size;
	columns[index].style.transform = `translateY(calc(50vh + ${offset}px - ${size / 2}px))`;
	Array.from(columns[index].children).forEach((ele2, i2) => {
		ele2.className = 'num ' + getClass(n, i2);
	});
}


//console.log("age style js imported")

