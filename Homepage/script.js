document.addEventListener("DOMContentLoaded", function() {
    // Highlight active navbar link on click
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Placeholder functionality for Quick Add buttons
    const quickAddButtons = document.querySelectorAll(".btn");
    quickAddButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Item added to cart!");
        });
    });

    // Smooth scroll for footer links (if anchors are used)
    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

function showHelp() {
    document.getElementById('helpModal').style.display = 'block';
    document.getElementById('helpLink').classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeHelp() {
    document.getElementById('helpModal').style.display = 'none';
    document.getElementById('helpLink').classList.remove('active');
    document.body.style.overflow = 'auto'; // Unlock scroll
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('helpModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.getElementById('helpLink').classList.remove('active');
    }
}