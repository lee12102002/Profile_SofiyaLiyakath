document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1); // Get target ID
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none'; // Hide all content
        });
        document.getElementById(target).style.display = 'block'; // Show target content
    });
});
document.getElementById("linkButton").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/";
});
