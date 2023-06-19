//JavaScript Decralation block

const fname = document.getElementById('fname');
const sname = document.getElementById('sname');

//onsubmmit -->

function welcome(argument) {
	// body...

	document.getElementById('form').style.display = "none";

	document.getElementById('h1').innerHTML = "My Dashboard";

	document.getElementById("demo").innerHTML = `welcome ${lname} ${sname} to your new home`;
}
