let subMenuListStatus = {};
let subMenuList = document.getElementsByClassName('sub');
let dropdown = document.getElementsByClassName('dropdown');

for (let i = 0; i < subMenuList.length; i++) {
  subMenuListStatus[i] = false;
  hideSubItem(subMenuList[i], subMenuListStatus[i]);
}

function hideSubItem (element, bool) {
	if(bool) element.classList.add("active");
	else element.classList.remove("active");
}

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('click', function (e) {
		e.preventDefault();
		subMenuListStatus[i] = !subMenuListStatus[i];
		hideSubItem(subMenuList[i], subMenuListStatus[i]);
	});
}