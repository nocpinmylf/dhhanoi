let subMenuList = document.getElementsByClassName('sub')
let dropdown = document.getElementsByClassName('dropdown')


//pre loading
window.onload = () => {
	document.getElementsByTagName('body')[0].classList.remove('loading')
}

// active sub menu
function hideSubItem (element) {
	element.classList.toggle("active")
}

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('click', function (e) {
		e.preventDefault()
		hideSubItem(subMenuList[i])
	})
}

