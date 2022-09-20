let originalTemp = "celsius";

function alertCity(element) {
	alert("You clicked on " + element.innerHTML);
}

function closeCookieContainer(element) {
	let cookiesContainer = document.querySelector("#cookies-container");
	cookiesContainer.remove();
}

function tempSelect() {
	let currentTempSelector = document.querySelector("#temp-selector");
	console.log(currentTempSelector.value);

	if (currentTempSelector.value == "celsius") {
		let classChange = document.querySelectorAll(".fahrenheit");
		classChange.forEach((element) => {
			element.classList.replace("fahrenheit", "celsius");
			element.innerHTML = Math.round(convertTemp("celsius", element.innerHTML));
		});
	} else if (currentTempSelector.value == "fahrenheit") {
		let classChange = document.querySelectorAll(".celsius");
		classChange.forEach((element) => {
			element.classList.replace("celsius", "fahrenheit");
			element.innerHTML = Math.round(
				convertTemp("fahrenheit", element.innerHTML)
			);
		});
	}
}

function convertTemp(temp, degrees) {
	if (temp == "fahrenheit") {
		return degrees * 1.8 + 32;
	}
	return (degrees - 32) * 0.5556;
}
