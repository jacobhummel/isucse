(function($) {
  "use strict";


/* ---------------------------------------------------------------------- */
/*         Anchorra Main Javascript FIle
/* ---------------------------------------------------------------------- */

//Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Javascipt Scripting Starts Here

/*  DROPDOWN MENU SCRIPT  */

function dropdownMenu () {

    // Declaring Variables to insert elements to the correct location
    var menu_border = $('#navigation ul li ul li'),
    menu_top = $('#navigation > ul > li > ul'),
    menu_right = $('#navigation ul li ul li ul');


// Inserting the top arrow icon
menu_top.prepend('<i class="icon-caret-up icon-2x nav-top-icon"></i>');

// Inserting the right array icon
menu_right.before('<i class="icon-chevron-right nav-right-icon"></i>');

//Menu element hover fix hide top and bottom borders of the hovered li item
menu_border.on('mouseenter', function (){
    
    $(this).children().addClass('transparent-border');
    $(this).prev().children().addClass('transparent-border');
    
});

menu_border.on('mouseleave', function(){
    
    $(this).children().removeClass('transparent-border');
    $(this).prev().children().removeClass('transparent-border');
    
});

// Responsive navigation

$('#navigation > ul').clone().prependTo('#mobile-navigation');

$('a.nav-toggle').on('click',function(){
    $('#mobile-navigation').slideToggle();
});    

}

function headerBorder () {
    
    // If pagination is present set the border of header and top icon to be cyan if it is not present set the border and top icon to be cyan

    if($('.page-heading-container').length > 0){
        $('.header-container').css('border-bottom','4px solid #ffffff');
        $('.nav-top-icon').css('color','#ffffff');
        
    }

}

function footerSubscribeWidgetAjax () {
    
    $('.footer-subscribe-widget form').submit(function(){

            var input = $(this).find('input');
            var subs = $(this).find('button');

            $.ajax({  
              type: "POST",  
              url: "footer-subscribe.php",  
              data: input,  
              success: function() {  
                $('span.footer-subscribe-submit').fadeIn();  
            }  

            });
            return false;

    });

}

function subscribeBoxAjax () {
    
    $('.subscribe-box form').submit(function(){

            var input = $(this).find('input');
            var subs = $(this).find('button');

            $.ajax({  
              type: "POST",  
              url: "subscribebox.php",  
              data: input,  
              success: function() {
                $('h3.subscbribe-box-text').fadeOut(500,function(){
                    $('h3.subscribe-box-submit').fadeIn();
                });  
                  
            }  


            });
            return false;

    });


}
function contactFormAjax () {

    $('form.contact-form').submit(function(){

            var input = $(this).find('input');
            var subs = $(this).find('button');

            $.ajax({  
              type: "POST",  
              url: "contact-form.php",  
              data: input,  
              success: function() {
                $('form.contact-form p.success').fadeIn();
                  
            }  


            });
            return false;

    });


}

function sidebarMenuHover () {

    // SIDEBAR MENU WIDGET HOVER CARET SCRIPT

        $('#sidebar div.menu-widget ul li a').on('mouseenter',function(){
            $(this).before('<i class="icon-caret-right"></i>');
            
        })

        $('#sidebar div.menu-widget ul li a').on('mouseleave',function(){
            $(this).prev().remove();
    
        })
    
}


// SHORTCODES


function faqAccordion () {
    
        $('.faq-accordion .collapse').on('show', function(){
            $(this).prev().find('i').attr('class', 'icon-ok-sign'); //add active state to button on open
        });

        $('.faq-accordion .collapse').on('hide', function(){
            $(this).prev().find('i').attr('class', 'icon-question-sign'); //remove active state to button on close
        });

}



function normalAccordion () {
    
    // Normal Accordion

    $('.normal-accordion .collapse').on('show', function(){
        $(this).prev().find('i').attr('class', 'icon-minus'); //add active state to button on open
        $(this).prev().find('.accordion-toggle').addClass('normal-accordion-active'); //remove active state to button on close
    });

    $('.normal-accordion .collapse').on('hide', function(){
        $(this).prev().find('i').attr('class', 'icon-plus'); //remove active state to button on close
        $(this).prev().find('.accordion-toggle').removeClass('normal-accordion-active') //remove active state to button on close
    });

}

function serviceHover () {
    
    // Services Hover

    $('.service-box').on('mouseenter',function(){
        $(this).prepend('<i class="icon-caret-right"></i>');
    });

    $('.service-box').on('mouseleave',function(){
        $(this).find('i.icon-caret-right').remove();
    });

}


function sidebarFix () {
    
    // Sidebar fix incase you miss the .sidebar-fix class

    $('aside#sidebar').parent('.row').addClass('sidebar-fix');
    
}

function featuredSlider () {
    
    // Featured slider

    $('#featured-slider').carousel({
        pause: "false"
    });


}

function homeOneSlider () {

    $('#home-v1-featured-slider').carousel({
    pause: "false"
    });

}

function recentPosts () {
    
    // Recent-posts slider

    $('#recent-posts').carousel({
        pause: "false",
    });

}

function recentProjects () {

    $('#recent-projects').carousel({
        pause: "false",
    });

}

function testimonialSlider() {

    $('.testimonials').carousel({
    pause: "false",
    interval: 3000
    });

}



function categoryDropdown () {
    
    // Category dropdown 
    $('.category-dropdown .category-toggle').on('click',function(){

        $(this).next('ul').show();

    });

    $('.category-dropdown').on('mouseleave',function(){

        $(this).find('ul').hide();

    });

}


dropdownMenu();
headerBorder();
footerSubscribeWidgetAjax();
subscribeBoxAjax();
sidebarMenuHover();
faqAccordion();
normalAccordion();
serviceHover();
sidebarFix();
featuredSlider();
recentPosts();
recentProjects();
testimonialSlider();
homeOneSlider();
categoryDropdown();
contactFormAjax();

})(jQuery);