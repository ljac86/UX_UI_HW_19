$(document).ready(function() {
    $('.travelEAZE').hover(
        function() {
            // Mouse enters
            $(this).addClass('enlarged');
        },
        function() {
            // Mouse leaves
            $(this).removeClass('enlarged');
        }
        
    );  
});

$(document).ready(function() {
    $('.sanctuary').hover(
        function() {
            // Mouse enters
            $(this).addClass('enlarged');
        },
        function() {
            // Mouse leaves
            $(this).removeClass('enlarged');
        }
        
    );  
});

$(document).ready(function() {
    $('li').hover(
        function() {
            $(this).css('text-decoration', 'underline');
            $(this).css('cursor', 'pointer');
            $(this).css('font-weight', 'bold');

        }, 
        function() {
            $(this).css('text-decoration', 'none');
            $(this).css('cursor', 'default');
            $(this).css('font-weight', 'normal');
        }
    );
});

$(document).ready(function() {
    $('button').hover(
        function() {
            $(this).css('box-shadow', '0 8px 12px rgba(0, 0, 0, 0.4)'); // Add shadow on hover
        },
        function() {
            $(this).css('box-shadow', '0 2px 4px rgba(0, 0, 0, 0.2)'); // Remove shadow when not hovering
        }
    );
});

$(document).ready(function() {
    $('h3').hover(
        function() {
            $(this).css('cursor', 'pointer');
        }, 
        function() {
            $(this).css('cursor', 'default');
        }
    );
});