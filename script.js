//your JS code here. If requi
function upperCase() {
	let inpField = document.getElementById("fname");
	inpField.addEventListener("blur", function() {
		inpField.value = inpField.value.toUpperCase();
	});
}

window.onload = upperCase;