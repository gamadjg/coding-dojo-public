// const lookup_form = document.querySelector("#lookup_form");

// lookup_form.addEventListener("submit", function (event) {
// 	event.preventDefault();
// 	let user = document.querySelector("#user_name");
// 	get_user(user.value);
// 	lookup_form.reset();
// });

function get_user(user) {
	fetch(
		"http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=7ed949534dc05bf2e8f15a239c46a3a7"
	)
		.then((response) => {
			if (response.ok) return response.json();
			throw new Error("Something went wrong");
		})
		.then((data) => {
			console.log(data);
			// document.querySelector("#account").innerHTML = "";
			// let user_name = document.createElement("h1");
			// user_name.innerText = data.login;

			// let user_img = document.createElement("img");
			// user_img.setAttribute("src", data.avatar_url);

			// document.querySelector("#account").appendChild(user_name);
			// document.querySelector("#account").appendChild(user_img);
		})
		.catch((error) => console.log(error));
}
