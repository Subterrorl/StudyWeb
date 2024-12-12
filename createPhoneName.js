// createPhoneName.js
function createPhoneName(title) {
    const phoneName = document.createElement("div");
    phoneName.className = "phone-name";
    phoneName.textContent = title;

    return phoneName;
}
