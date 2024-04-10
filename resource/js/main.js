// mixitup START
var mixer = mixitup('.grid-portfolio-container');
//mixitup end

//hambarger menu start
function openMenu() {
  document.getElementById('navbar').style.height=("100vh");
}
function closeMenu() {
  document.getElementById('navbar').style.height=("0%");
}
//hambarger menu end

//smooth scroll start
$(function(){
  $('.menu-item a,.scroll-down a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
    },1000);
    return false;
  });
});
//smooth scroll end

// Pie Charts 
$(".pie-chart").each(function() {
    var $pieChart = $(this);
    
    var percent = $pieChart.attr('data-percent');
    var $path = $pieChart.find('path');
    var pathLength = $path[0].getTotalLength();
    var offsetTo = pathLength * (percent / 100);
  
    $pieChart.attr('data-percent', 0);
    $path[0].style.strokeDashoffset = 0;
  
    $pieChart.one("inview", function(event) {
      $path.animate(
        {'strokeDashoffset': offsetTo}, 
        { duration: 2500,
          step: function (now) {
            $pieChart.attr('data-percent', Math.round(now/pathLength*100));
          }
        });
    });
  });
  
  //portfolio filter
$(document).ready(function(){
    $('.loadmore').click(function(){
        $('.grid-portfolio-items:nth-of-type(n+5)').show(1000,function(){
          $('.grid-portfolio-items:nth-of-type(n+5)').css('display','inline-block')
        });
    });
});