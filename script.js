// This script adds a smooth scroll effect to the "Buy Tickets" button in the hero section.

$(document).ready(function () {
    $("#buy-tickets").on("click", function () {
        smoothScroll("#tickets");
    });
});

function smoothScroll(element) {
    var scrollTo = $(element).offset().top;
    $(window).animate({
        scrollTop: scrollTo
    }, 500);
}
