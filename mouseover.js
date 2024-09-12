
const hoverElement = document.querySelectorAll('.hover-container');
const popup = document.querySelector('.popup');

// Show the popup on mouseover

hoverElement.forEach(item=>{
    item.addEventListener('mouseover', (event) => {
        popup.style.visibility = 'visible';
        popup.innerHTML=event.target.dataset.extrainfo
    })
    item.addEventListener('mouseout', (event) => {
        popup.style.visibility = 'hidden';
        popup.innerHTML=""
    });
    item.addEventListener('mousemove', (event) => {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        // Position the popup above the mouse cursor
        popup.style.left = `${mouseX}px`;
        popup.style.top = `${mouseY - popup.offsetHeight - 10}px`; // Offset 10px above the cursor
    });
})

// Hide the popup when the mouse leaves


// Update the position of the popup when the mouse moves
