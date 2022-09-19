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
