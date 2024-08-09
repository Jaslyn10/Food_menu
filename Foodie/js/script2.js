document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the values from the form
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    
    // Create a new review element
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `<strong>${name}</strong><p>${review}</p>`;
    
    // Append the review to the reviews container
    document.getElementById('reviewsContainer').appendChild(reviewElement);
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
});
