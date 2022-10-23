async function getGithub() {
	let coderData = await fetch("https://api.github.com/users/gamadjg")
		.then((response) => response.json())
		.then((result) => {
			console.log(result.avatar_url);
			return result;
		})
		.catch((err) => console.log(err));
	let display = document.querySelector("#display");
	display.innerHTML = `<img src=${coderData.avatar_url}></img>`;
}

async function getCoderData() {
	var response = await fetch("https://api.github.com/users/adion81");
	var coderData = await response.json();
	let display = document.querySelector("#display");
	display.innerHTML = `<img src=${coderData.avatar_url}></img>`;
}

async function get_account(form) {
	console.log(document.forms[0]);
	// let x = document.registration.gh_account;
	// console.log(x);

	// let userAccount = await fetch(`https://api.github.com/users/${form.acct}`)
	// 	.then((response) => response.json())
	// 	.then((result) => {
	// 		console.log(result.avatar_url);
	// 		return result;
	// 	})
	// 	.catch((err) => console.log(err));
	// let display = document.querySelector("#display");
	// display.innerHTML = `<img src=${userAccount.avatar_url}></img>`;
}

let form = document.getElementById("#acct_form");
form.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("test");
});
