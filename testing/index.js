var state = "expanded";
//Check if navbar is expanded or minimized and handle 
$('#navbar-toggle').click(function() {
    if (state == "expanded") {
        $('.sidebar').css('margin-left', '-180px');
        state = "minimized";
    } else {
        if (state == "minimized") {
            $('.sidebar').css('margin-left', '0px');
            state = "expanded";
        }
    }
})