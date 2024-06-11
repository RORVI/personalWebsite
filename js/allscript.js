/* Stage- Bootstrap one page Event ticket booking theme 
Created by pixpalette.com - online design magazine */

$(window).on('load', function(){
    // Animate loader off screen
    $(".loader").fadeOut("slow");
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

