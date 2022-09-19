// function likeCounter() {
// 	let likeCounter = document.querySelector(".count");
// 	likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
// }

function likeCounter(counter) {
	let likeCounter = document.querySelectorAll(".count");
	likeCounter[counter].innerHTML = parseInt(likeCounter[counter].innerHTML) + 1;
	// console.log(likeCounter[counter].innerHTML);
}

// function likeCounter(counter) {
// 	let likeCounter = document.querySelector(counter);
// 	likeCounter[counter].innerHTML = parseInt(likeCounter[counter].innerHTML) + 1;
// 	// console.log(likeCounter[counter].innerHTML);
// }
