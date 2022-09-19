function approveUser(flName) {
	document.querySelector("#" + flName).remove();

	let addNewConnection = document.querySelector(".current-connections");

	let newConnection = flName.split("-");

	newConnection.push(
		newConnection[0].charAt(0).toUpperCase() +
			newConnection[0].slice(1) +
			" " +
			newConnection[1]
	);

	addNewConnection.innerHTML +=
		`
		<div class="current-connection-entry">
			<img class="user-icon connection-icon" src="assets/images/` +
		newConnection[0] +
		`-s.jpg" />
			<span class="connection-name">` +
		newConnection[2] +
		`</span>
		</div>
	`;
	increaseCount(true);
}

function denyUser(userName) {
	document.querySelector("#" + userName).remove();
	increaseCount(false);
}

function increaseCount(bool) {
	let requestCountDoc = document.querySelector(".connections-req-num");
	let requestCount = parseInt(requestCountDoc.innerHTML);
	let connectionsCountDoc = document.querySelector(".connections-num");

	if (bool) {
		requestCountDoc.innerHTML = requestCountDoc.innerHTML - 1;
		connectionsCountDoc.innerHTML = parseInt(connectionsCountDoc.innerHTML) + 1;
	} else {
		requestCountDoc.innerHTML = requestCountDoc.innerHTML - 1;
	}
}

users = {};
newUser(0, "Adrien D", "adrien-s.jpg");
newUser(1, "Alayne T", "alayne-s.jpg");
newUser(2, "Anne J", "anne-s.jpg");
newUser(3, "Arry Y", "arry-s.jpg");
newUser(4, "Jane M", "jane-m.jpg");
newUser(5, "Phil K", "phil-s.jpg");
newUser(6, "Todd K", "todd-s.jpg");

function newUser(id, name, picture) {
	users[id] = { name: name, picture: picture };
}

//console.log(users);

function changeUser() {
	let userImg = document.querySelector(".profile-icon");
	let displayName = document.querySelector("#content-name");
	// console.log(userImg);
	let randomUser = users[Math.floor(Math.random() * 7)];
	displayName.innerHTML = randomUser.name;
	userImg.setAttribute("src", "assets/images/" + randomUser.picture);
	console.log(displayName.innerHTML);
}
