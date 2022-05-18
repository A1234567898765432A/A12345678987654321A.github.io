let dropdown_button = document.getElementById("dropdown_button");
let dropdown_list = document.getElementById("dropdown_list");

dropdown_button.onclick = function(event) {
	dropdown_list.style.display = 'flex'
	dropdown_button.style.display = 'none'
};
dropdown_list.onclick = function(event) {
	dropdown_button.style.display = 'block'
	dropdown_list.style.display = 'none'
};

