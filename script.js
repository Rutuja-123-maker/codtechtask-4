// Add interactivity if necessary, for example to update progress dynamically
document.addEventListener('DOMContentLoaded', function() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress p');

    // Example of changing the progress dynamically
    let progress = 45; // This would be dynamic based on the user's actual progress
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${progress}% Completed`;
});
