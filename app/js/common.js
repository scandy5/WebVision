document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', (e) => {
		let event = e.target;

		if (event.matches(`#S`)) {
			addActiveClassToSize(event.innerHTML);
		}

		if (event.matches(`#M`)) {
			addActiveClassToSize(event.innerHTML);
		}

		if (event.matches(`#L`)) {
			addActiveClassToSize(event.innerHTML);
		}

		if (event.matches(`#XL`)) {
			addActiveClassToSize(event.innerHTML);
		}

		if (event.matches('#next-count')){
			getCountOfNextValue();
		}

		if (event.matches('#previous-count')){
			getCountOfPreviousValue();
		}

	})

	
	

	const addActiveClassToSize = (size) => {
		document.querySelector('#S').classList.remove('active');
		document.querySelector('#M').classList.remove('active');
		document.querySelector('#L').classList.remove('active');
		document.querySelector('#XL').classList.remove('active');
		document.querySelector(`#${size}`).classList.add('active');
	}
	
	let countElement = document.querySelector('#count');
	let count = document.querySelector('#count').innerHTML;

	const getCountOfNextValue = () =>{
		count++;
		
		if (countElement) {
			countElement.innerHTML = `${count}`;
		}
	}

	const getCountOfPreviousValue = () =>{
		count--;
		
		if (count < 1) {
			count = 1;
		}

		if (countElement) {
			countElement.innerHTML = `${count}`;
		}
	}
})