const searchInput = document.getElementById("search-input");

searchInput.addEventListener("focus", function() {
    if (this.value === "Type in Products, Category, Brands") {
        this.value = "";
    }
});

searchInput.addEventListener("blur", function() {
    if (this.value.trim() === "") {
        this.value = "Type in Products, Category, Brands";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Register popup elements
    const registerBtn = document.getElementById("registerBtn");
    const registerPopup = document.getElementById("registerPopup");
    const closeRegister = document.getElementById("closeRegister");

    // FAQ popup elements
    const faqBtn = document.getElementById("faqBtn");
    const faqPopup = document.getElementById("faqPopup");
    const closeFaq = document.getElementById("closeFaq");

    // Open Register popup
    registerBtn.addEventListener("click", function () {
        registerPopup.style.display = "flex";
    });

    // Close Register popup
    closeRegister.addEventListener("click", function () {
        registerPopup.style.display = "none";
    });

    // Close Register popup when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === registerPopup) {
            registerPopup.style.display = "none";
        }
    });

    // Open FAQ popup
    faqBtn.addEventListener("click", function () {
        faqPopup.style.display = "flex";
    });

    // Close FAQ popup
    closeFaq.addEventListener("click", function () {
        faqPopup.style.display = "none";
    });

    // Close FAQ popup when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === faqPopup) {
            faqPopup.style.display = "none";
        }
    });

    // Dropdown button click event
    const dropdownBtn = document.querySelector(".dropdown .category-btn");
    const dropdown = document.querySelector(".dropdown");

    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents click from bubbling up
        dropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdown.classList.remove("show");
    });

    let slides = document.querySelectorAll(".promo-slide");
    let index = 0;
    let interval;

    function showSlides(n) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[n].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlides(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlides(index);
    }

    function changeSlide(n) {
        clearInterval(interval); // Stop auto-play
        index = (index + n + slides.length) % slides.length;
        showSlides(index);
        autoPlay(); // Restart auto-play after manual control
    }

    function autoPlay() {
        interval = setInterval(nextSlide, 3000); // Change image every 3s
    }

    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));

    showSlides(index);
    autoPlay(); // Start automatic slideshow

    const productList = document.getElementById("product-list");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const itemsPerPage = 5;

    const productContainer = document.querySelector(".product-container");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const productWidth = document.querySelector(".product").offsetWidth + 20; // Include gap
    const productsPerPage = 5;
    const totalProducts = document.querySelectorAll(".product").length;
    const maxScroll = (totalProducts - productsPerPage) * productWidth; // Maximum scroll limit

    function updateCarousel() {
        const translateX = -currentIndex * productWidth * productsPerPage;
        productContainer.style.transform = 'translateX(${translateX}px)';
    }

    rightArrow.addEventListener("click", function () {
        if (currentIndex < totalProducts - productsPerPage) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first set
        }
        updateCarousel();
    });

    leftArrow.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalProducts - productsPerPage; // Loop to last set
        }
        updateCarousel();
    });

    updateCarousel(); // Ensure correct positioning on load

    const container = document.querySelector(".product-container");
    const prev = document.querySelector(".left-arrow");
    const next = document.querySelector(".right-arrow");

    prev.addEventListener("click", () => {
        container.scrollBy({ left: -container.offsetWidth, behavior: "smooth" });
    });

    next.addEventListener("click", () => {
        container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
    });

    const products = document.querySelectorAll(".product"); // Get all product elements
    const popup = document.getElementById("productPopup");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.querySelector(".close-popup");

    products.forEach((product, index) => {
        product.addEventListener("click", function () {
            const imageName = 'NAD${index + 1}.jpg'; // Dynamically match the correct image
            popupImage.src = imageName;
            popup.classList.add("active"); // Show popup
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    closePopup.addEventListener("click", function () {
        popup.classList.remove("active");
        document.body.style.overflow = ""; // Allow scrolling again
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});

// Skin Care Section Navigation
const skinCareSlider = document.querySelector('.skin-care-slider');
const skinCarePrev = document.querySelector('.skin-care-prev');
const skinCareNext = document.querySelector('.skin-care-next');

let skinCareIndex = 0;

skinCareNext.addEventListener('click', () => {
    if (skinCareIndex < 5) {
        skinCareIndex++;
        skinCareSlider.style.transform = 'translateX(-${skinCareIndex * 100}%)';
    }
});

skinCarePrev.addEventListener('click', () => {
    if (skinCareIndex > 0) {
        skinCareIndex--;
        skinCareSlider.style.transform = 'translateX(-${skinCareIndex * 100}%)';
    }
});

// Scroll function for Skin Care section
function scrollSkinCare(direction) {
    let container = document.getElementById("skin-care-container");
    let scrollAmount = container.clientWidth / 2; // Scroll half of container width
    container.scrollLeft += direction * scrollAmount;
}

function nextSlide(categoryId) {
    let container = document.getElementById(categoryId);
    container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
}

function prevSlide(categoryId) {
    let container = document.getElementById(categoryId);
    container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
}

// Health Food Section Navigation
const healthFoodSlider = document.querySelector('.health-food-slider');
const healthFoodPrev = document.querySelector('.health-food-prev');
const healthFoodNext = document.querySelector('.health-food-next');

let healthFoodIndex = 0;

healthFoodNext.addEventListener('click', () => {
    if (healthFoodIndex < 5) {
        healthFoodIndex++;
        healthFoodSlider.style.transform = `translateX(-${healthFoodIndex * 100}%)`; 
    }
});

healthFoodPrev.addEventListener('click', () => {
    if (healthFoodIndex > 0) {
        healthFoodIndex--;
        healthFoodSlider.style.transform = `translateX(-${healthFoodIndex * 100}%)`;
    }
});

// Function to scroll the Health Food section
function scrollHealthFood(direction) {
    let container = document.getElementById("health-food-container");
    let scrollAmount = container.clientWidth / 2; // Scroll half of the container width
    container.scrollLeft += direction * scrollAmount;
}

// Function to navigate slides for any category
function nextSlide(categoryId) {
    let container = document.getElementById(categoryId);
    container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
}

function prevSlide(categoryId) {
    let container = document.getElementById(categoryId);
    container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
}

// =====================
// Medical Supply Scrolling
// =====================

function nextSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

function prevSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

// =====================
// Mom & Baby Scrolling
// =====================

function nextSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

function prevSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

// =====================
// Supplements Scrolling
// =====================

function nextSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

function prevSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

// =====================
// Perfume and Fragrance Scrolling
// =====================

function nextSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

function prevSlide(categoryId) {
    let container = document.getElementById(categoryId);
    if (container) {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    } else {
        console.error("Category ID not found:", categoryId);
    }
}

// =====================
// Search Bar Functionality (Improved)
// =====================

// Function to search and scroll to the category or product
function searchProduct() {
    let input = document.getElementById("search-input").value.toLowerCase().trim();
    if (!input) return; // Stop if input is empty

    // List of categories and their container IDs
    let categories = {
        "late arrival": "lateArrival",
        "new arrival": "newArrival",
        "skin care": "skinCare",
        "health food": "healthFood",
        "medical supply": "medicalSupply",
        "mom & baby": "momBaby",
        "supplements": "supplements",
        "perfume and fragrance": "perfumeFragrance"
    };

    let found = false;

    // Check if search matches a category
    for (let category in categories) {
        if (input === category.toLowerCase()) {
            let categoryElement = document.getElementById(categories[category]);
            if (categoryElement) {
                categoryElement.scrollIntoView({ behavior: "smooth", block: "start" });
                found = true;
            }
            break;
        }
    }

    // If category is not found, check for products
    if (!found) {
        let allProducts = document.querySelectorAll(".product");
        allProducts.forEach(product => {
            let productName = product.querySelector("p").innerText.toLowerCase();
            if (productName.includes(input)) {
                product.scrollIntoView({ behavior: "smooth", block: "center" });
                found = true;
                return; // Exit loop after finding the first match
            }
        });
    }

    // If no match found, show alert
    if (!found) {
        alert("Product or category not found!");
    }
}

// Attach event listener to the search icon
document.querySelector(".search-icon").addEventListener("click", searchProduct);

// Allow searching when pressing "Enter"
document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});

// =====================
// Category Buttons Scrolling Functionality
// =====================

// List of category buttons and their corresponding sections
const categoryMappings = {
    "New Arrival": "newArrival",
    "Skin Care": "skinCare",
    "Personal Care": "personalCare",
    "Health Food": "healthFood",
    "Medical Supply": "medicalSupply",
    "Mom & Baby": "momBaby",
    "Supplements": "supplements",
    "Perfume & Fragrance": "perfumeFragrance",
    "Men's Care": "mensCare",
    "Household": "household"
};

// Function to scroll to the category section when a button is clicked
function scrollToCategory(event) {
    const categoryName = event.target.innerText.trim();
    const categoryId = categoryMappings[categoryName];

    if (categoryId) {
        const categorySection = document.getElementById(categoryId);
        if (categorySection) {
            categorySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}

// Attach event listeners to all category buttons
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", scrollToCategory);
});
