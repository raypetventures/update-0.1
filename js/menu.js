// WARNING: MOBILE MENU CLOSE button
$(".closebtn-mobile-menu").click(
  function(){
    $(".menu-container").hide();
  }
);



// WARNING: MENU IS CLICKED
$(".btn-menu").click(
  function(){
      $(".menu-container").fadeIn();
  }
);

$(".closebtn-menu-box").click(
  function(){
    $(".menu-container").fadeOut();
  }
);

//------------menu is clicked

// WARNING: CALL TO ORDER BTN
$(".nb-calltoorder-btn").click(
  function(){
    $(".modal-calltoorder-box").fadeIn();
    $("html").css({"overflow-y":"hidden"});
  }
);

// WARNING: when modal is visible make body inmobile
    if($(".modal-calltoorder-box").is(":visible")){
        $("html").css({"overflow-y":"hidden"});
      } else{
        $("html").css({"overflow-y":"auto"});
    }


// WARNING: WHEN CONTACT MODAL CLOSE BTN IS CLICKED
$(".closebtn-modal").click(
  function(){
    $(".modal-calltoorder-box").fadeOut();
      $("html").css({"overflow-y":"auto"});
  }
);

// WARNING:  PRODUCT IMAGES
$(".nb-active, .nb-active-dynamic").show();

// WARNING: PRODUCT BENEFITS clicked



function myFunction () {
  // WARNING: WRITE CHECKER HERE

}

var interval = setInterval(function () { myFunction(); }, 5000);
