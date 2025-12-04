function loadExternalContent() {
    // 1. Define the URL of the external content
    const contentUrl = "yourusername.github.io";

    // 2. Fetch the content from that URL
    fetch(contentUrl + "?t=" + Date.now()) // Add timestamp to prevent caching
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            // 3. Open a new, blank window
            const newWin = window.open("about:blank", "_blank");

            if (newWin) {
                // 4. Write the fetched HTML content into the new window
                newWin.document.open();
                newWin.document.write(text);
                newWin.document.close();
            } else {
                alert('Please allow pop-ups for this website to view the content.');
            }
        })
        .catch(error => {
            console.error('There was a problem fetching the content:', error);
            alert('Could not load the content.');
        });
}
