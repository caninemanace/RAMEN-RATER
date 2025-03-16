document.addEventListener("DOMContentLoaded", function () {
    const ramens = [
        { name: "Shoyu Ramen", restaurant: "Ichiran", image: "ramen1.jpg", rating: 4.5, comment: "Rich and flavorful!" },
        { name: "Tonkotsu Ramen", restaurant: "Ippudo", image: "ramen2.jpg", rating: 5, comment: "Creamy broth with perfect noodles." },
        { name: "Miso Ramen", restaurant: "Santouka", image: "ramen3.jpg", rating: 4, comment: "Nice balance of miso and umami." },
        { name: "Shio Ramen", restaurant: "Ramen Tatsunoya", image: "ramen4.jpg", rating: 4.2, comment: "Light and delicate broth with a deep umami taste." },
        { name: "Spicy Miso Ramen", restaurant: "Totto Ramen", image: "ramen5.jpg", rating: 4.7, comment: "Perfect level of spice with a rich miso flavor." },
        { name: "Black Garlic Tonkotsu Ramen", restaurant: "Menya Musashi", image: "ramen6.jpg", rating: 5, comment: "Incredibly flavorful with a deep roasted garlic aroma." }
    ];

    let currentIndex = 0;

    function displayRamen(index) {
        const ramen = ramens[index];

        document.getElementById("ramen-name").textContent = ramen.name;
        document.getElementById("ramen-restaurant").textContent = `Restaurant: ${ramen.restaurant}`;
        document.getElementById("ramen-image").src = ramen.image;
        document.getElementById("ramen-image").alt = ramen.name;
        document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
        document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
    }

    document.getElementById("next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % ramens.length;
        displayRamen(currentIndex);
    });

    document.getElementById("prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + ramens.length) % ramens.length;
        displayRamen(currentIndex);
    });

    
    function addSubmitListener() {
        const ramenForm = document.getElementById("ramen-form");
        ramenForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("new-ramen-name").value;
            const restaurant = document.getElementById("new-restaurant-name").value;
            const rating = document.getElementById("new-ramen-rating").value;
            const comment = document.getElementById("new-ramen-comment").value;
            const imageFile = document.getElementById("new-ramen-image").files[0];

            if (imageFile) {
                const reader = new FileReader();
                reader.readAsDataURL(imageFile);
                reader.onload = function (event) {
                    const newRamen = {
                        name,
                        restaurant,
                        image: event.target.result,
                        rating,
                        comment
                    };
                    ramens.push(newRamen);
                    displayRamen(ramens.length - 1); 
                    ramenForm.reset();
                };
            }
        });
    }

    displayRamen(currentIndex);
    addSubmitListener();
});
