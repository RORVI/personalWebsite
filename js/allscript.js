$(window).on('load', function(){
    // Animate loader off screen
    $(".loader").fadeOut("slow");if (window.innerWidth > 700 && window.screen.orientation.angle == 0) {
        var PleaseRotateOptions = {
            onlyMobile: true,
            forcePortrait: false,
            allowClickBypass: false,
            subMessage: "",
        };
    } else {
        var PleaseRotateOptions = {
            onlyMobile: true,
            forcePortrait: true,
            allowClickBypass: false,
            subMessage: "",
        };
    }
    
});

$(document).on("click", ".tab-controll" , function(e) {
	  	$(".tab-controll").removeClass("active");
		$(this).addClass("active");
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.nav-tabs .tab-control a').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.nav-tabs .tab-control').forEach(item => item.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});

