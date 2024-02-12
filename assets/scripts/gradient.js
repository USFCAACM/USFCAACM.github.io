const area = document.querySelector(".shiny");

area.addEventListener("mousemove", (e) => {
    const { x, y }= area.getBoundingClientRect();
    area.style.setProperty("--x", (e.clientX - x).toString());
    area.style.setProperty("--y", (e.clientY - y).toString());
});