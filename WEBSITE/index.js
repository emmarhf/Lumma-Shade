document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".persianas-tabs button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const target = tab.getAttribute("data-tab");

            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.id === target) {
                    content.classList.add("active");
                }
            });
        });
    });

    // Inicializa las imágenes para cada tipo de persiana
    updateImages('elegantes', [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
        'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg',
        'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'
    ]);

    updateImages('comodas', [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
        'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg',
        'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'
    ]);

    updateImages('privadas', [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
        'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg',
        'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'
    ]);
});

function updateImages(type, images) {
    const grid = document.getElementById(type).querySelector(".grid");
    grid.innerHTML = ''; // Clear current images
    images.forEach(imageUrl => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        const img = document.createElement("img");
        img.src = imageUrl;
        gridItem.appendChild(img);
        grid.appendChild(gridItem);
    });
}

// Example usage:
// updateImages('elegantes', ['image1.jpg', 'image2.jpg', ...]);
// updateImages('comodas', ['image1.jpg', 'image2.jpg', ...]);
// updateImages('privadas', ['image1.jpg', 'image2.jpg', ...]);