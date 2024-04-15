$(document).ready(function() {
    $('.fs-2').on('click', function() {
        var text = $(this).text().trim();
        var imagePath = getImagePath(text);
        
        if (imagePath) {
            $('#services-picture').fadeOut(300, function() {
                $(this).attr('src', imagePath).fadeIn(300);
            });
        }
    });

    function getImagePath(text) {
        switch (text) {
            case 'Mobile UI/UX Design':
                return './asset/img/services/mobile-design.png';
            case 'Web UI/UX Design':
                return './asset/img/services/web-design.png';
            case 'Front-end Web Developer':
                return './asset/img/services/front-end.png';
            default:
                return null;
        }
    }
});