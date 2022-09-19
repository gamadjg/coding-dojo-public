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

	console.log(newConnection);

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
}

function denyUser(userName) {
	document.querySelector("#" + userName).remove();
}
