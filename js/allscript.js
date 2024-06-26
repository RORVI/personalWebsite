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

document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});


