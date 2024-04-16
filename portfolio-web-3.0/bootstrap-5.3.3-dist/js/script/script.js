/* service picture transition when user click some certain title */

$(document).ready(function() {
    $('#mobile-design').click(function() {
        changeImage('./asset/img/services/mobile-design.png');
    });

    $('#web-design').click(function() {
        changeImage('./asset/img/services/web-design.png');
    });

    $('#web-dev').click(function() {
        changeImage('./asset/img/services/front-end.png');
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
