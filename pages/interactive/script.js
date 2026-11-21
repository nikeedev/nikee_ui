window.infoClicked = false;

info.onclick = () => {
    window.infoClicked = !window.infoClicked;
    info_box.style.display = window.infoClicked ? "block" : "none";
}
