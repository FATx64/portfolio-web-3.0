import dribbbleToken from "./api.js";

/* service picture transition when user click some certain title */

$(document).ready(function() {
    $('#mobile-design').click(function() {
        changeImage('./asset/img/services/mobile-design.png');
    });

    $('#web-design').click(function() {
        changeImage('./asset/img/services/web-design.png');
    });

    $('#web-dev').click(function() {
        changeImage('./asset/img/services/web-dev.png');
    });

    function changeImage(imagePath) {
        $('#services-picture').fadeOut(300, function() {
            $(this).attr('src', imagePath).fadeIn(300);
        });
    }
});

/*list hovering style */

$(document).ready(function() {
    $('.list-item').click(function() {
        $('.list-item').removeClass('active'); // Remove active class from all list items
        $(this).addClass('active'); // Add active class to the clicked list item
    });
});

/*fetching API */

$(document).ready(function() {
    
    // Dribbble API endpoint
    
    let dribbbleUrl = `https://api.dribbble.com/v2/user/shots?access_token=${dribbbleToken}`;
    // Fetch data from Dribbble API
    $.ajax({
        url: dribbbleUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            populateCarousel(data);
        },
        error: function(error) {
            console.log('Error fetching data from Dribbble API:', error);
        }
    });

    // Function to populate carousel with Dribbble shots
    function populateCarousel(data) {
        let carouselInner = $('#portfolioCarousel .carousel-inner');
    
        // Clear existing carousel items
        carouselInner.empty();
    
        // Group data into sets of 3
        for (var i = 0; i < data.length; i += 3) {
            var group = data.slice(i, i + 3);
            var activeClass = i === 0 ? 'active' : '';
    
            var item = `
                <div class="carousel-item ${activeClass}">
                    <div class="row">
                        ${group.map(shot => `
                            <div class="col-md-4 mb-3">
                                <div class="card" data-title="${shot.title}">
                                    <a href="${shot.html_url}" target="_blank" rel="noopener noreferrer">
                                        <img class="img-fluid" alt="${shot.title}" src="${shot.images.hidpi}">
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
    
            carouselInner.append(item);
        }
    }   
});



