const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

dropdowns.forEach(dropdown => {
	const valueElement = dropdown.querySelector(".dropdown__value");
	const listElement = dropdown.querySelector(".dropdown__list");

	valueElement.addEventListener("click", () => {
		listElement.classList.toggle("dropdown__list_active");
	});

	listElement.addEventListener("click", (e) => {
		e.preventDefault();	
		const selectedValue = e.target;
		valueElement.textContent = selectedValue.textContent;
		listElement.classList.remove("dropdown__list_active");
	});

	// const items = Array.from(dropdown.querySelectorAll(".dropdown__item"));
	// items.forEach(item => {
	// 	item.addEventListener("click", (e) => {
	// 		e.preventDefault();
	// 		const selectedValue = item.querySelector(".dropdown__link");
	// 		valueElement.textContent = selectedValue.textContent;
	// 		listElement.classList.remove("dropdown__list_active");
	// 	});
	// });
	
});