document.getElementById("bugForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("bugTitle").value.trim();
    const description = document.getElementById("bugDescription").value.trim();

    if (title && description) {
        const bugList = document.getElementById("bugList");

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
        bugList.appendChild(listItem);

        // Reset form
        document.getElementById("bugForm").reset();
    }
});
