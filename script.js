document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault()

	// Get the selected radio button
	const selectedRadio = document.querySelector(
		'input[name="btnradio"]:checked'
	).nextElementSibling.textContent

	// Get the input text value
	const searchText = document.getElementById("search").value

	// Print the results to the console
	console.log(`Selected Option: ${selectedRadio}`)
	console.log(`Search Text: ${searchText}`)
})
