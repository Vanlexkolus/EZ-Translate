const dropdowns = document.querySelectorAll(".dropdown-container"),
    inputLanguageDropdown = document.querySelectorAll("#input-language"),
    outputLnagaugeDropdown = document.querySelectorAll("#output-language");

function populateDropdown(dropdown, options) {
    dropdown.querySelectorAll("ul").innerHTML = "";
    options.forEach((option) => {
        const li = document.createElement("li");
        const title = option.name + " (" + option.native + ")";
        
    });
}