$(document).ready(function () {
    // Check the initial width on page load
    checkWidth();

    // Add a listener for window resize
    $(window).resize(checkWidth);
});

function checkWidth() {
    var windowWidth = $(window).width();

    if (windowWidth < 857) {
        // If the width is less than 857, show the old carousel
        showOldCarousel();
    } else {
        // If the width is 857 or more, show the new carousel
        showNewCarousel();
    }
}

function showOldCarousel() {
    // Remove the new carousel
    $("#newCarousel").remove();

    // Check if the old carousel is already present
    if ($("#oldCarousel").length == 0) {
        // Add the old carousel HTML here
        $("#nav").after(`
            <div id="oldCarousel">
            <div id="carouselExampleCaptions" class="carousel slide text-center mx-auto" style="max-width: 725px;">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" style="max-height: 250px;">
                <div class="carousel-item active">
                <img src="img/b.png" class="d-block w-100 img-fluid rounded" alt="...">
                <div class="carousel-caption d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="img/d.png" class="d-block w-100 img-fluid rounded" alt="...">
                <div class="carousel-caption d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="img/a.png" class="d-block w-100 img-fluid rounded" alt="...">
                <div class="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        `);

        // Initialize the old carousel if necessary
        // Add the necessary JavaScript code for the old carousel
        $('#oldCarousel').carousel();
    }
}

function showNewCarousel() {
    // Remove the old carousel
    $("#oldCarousel").remove();

    // Check if the new carousel is already present
    if ($("#newCarousel").length == 0) {
        // Add the new carousel HTML here
        $("#nav").after(`
        <div id="newCarousel">
        <div id="carouselExampleCaptions" class="carousel slide mx-auto">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="d-flex justify-content-between align-items-start">
            <div class="w-50 text-start">
                <div class="carousel-caption d-md-block">
                <h5 class="fw-bold cont-center">Witch on the Holy Night</h5>
                <p class="cont-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non sapiente quidem vel perspiciatis id...</p>
                </div>
            </div>
            <img src="img/b.png" class="d-block w-50 img-fluid rounded" alt="...">
            </div>
        </div>
        <div class="carousel-item">
            <div class="d-flex justify-content-between align-items-start">
            <div class="w-50 text-start">
                <div class="carousel-caption d-md-block">
                <h5 class="fw-bold cont-center">First slide label</h5>
                <p class="cont-center">Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <img src="img/a.png" class="d-block w-50 img-fluid rounded" alt="...">
            </div>
        </div>
        <div class="carousel-item">
            <div class="d-flex justify-content-between align-items-start">
            <div class="w-50 text-start">
                <div class="carousel-caption d-md-block">
                <h5 class="fw-bold cont-center">First slide label</h5>
                <p class="cont-center">Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <img src="img/d.png" class="d-block w-50 img-fluid rounded" alt="...">
            </div>
        </div>
        <!-- Add similar structure for other carousel items -->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>
        </div
        `);
        $('#newCarousel').carousel();

        // Initialize the new carousel if necessary
        // Add the necessary JavaScript code for the new carousel
    }
}