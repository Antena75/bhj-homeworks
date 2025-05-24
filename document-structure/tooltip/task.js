let tooltipTextActive;
const elements = document.querySelectorAll(".has-tooltip");

elements.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();

        let tooltip = document.querySelector(".tooltip");

        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            document.body.appendChild(tooltip);
        }

        const tooltipText = e.target.getAttribute("title");

        const position = e.target.getBoundingClientRect();
        tooltip.style.left = `${position.left}px`;
        tooltip.style.top = `${position.bottom}px`;

        if (tooltipText === tooltipTextActive) {
            tooltip.classList.toggle("tooltip_active"); 
            return; 
        }
        tooltipTextActive = tooltipText;

        tooltip.textContent = tooltipText;
        tooltip.classList.add("tooltip_active");
    });
});