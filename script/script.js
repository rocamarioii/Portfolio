function setupTab() 
{
	document.querySelectorAll(".button_tabs").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement;
			const tabContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			const tabToActivate = tabContainer.querySelector(`.tab_content[data-tab="${tabNumber}"]`);

			sideBar.querySelectorAll(".button_tabs").forEach(button => {
				button.classList.remove("button_tabs-active");
			});

			tabContainer.querySelectorAll(".tab_content").forEach(tab => {
				tab.classList.remove("tab_content-active");
			});

			button.classList.add("button_tabs-active");
			tabToActivate.classList.add("tab_content-active");
		});
	});
}


document.addEventListener("DOMContentLoaded", () => {
	setupTab();

	document.querySelectorAll(".tabs").forEach(tabContainer => {
		tabContainer.querySelector(".tabs_sidebar .button_tabs").click();
	});
});