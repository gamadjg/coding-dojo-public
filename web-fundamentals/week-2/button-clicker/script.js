function loginBtn(element) {
	if (element.value == "Login") {
		element.value = "Logout";
		return;
	}
	element.value = "Login";
}

function addDefinitionBtn(element) {
	element.remove();
}

function likesBtn() {
	alert("Ninja was liked");
}
