// requesting for the html using jQuery .ready() method
$(document).ready(() => {
  const $cart = $("#cart");
  const $account = $("#account");
  const $help = $("#help");
  // click event handler functions
  $cart.on("click", () => {
    $("#cartMenu").show();
  });

  $account.on("click", () => {
    $("#accountMenu").show();
  });

  $help.on("click", () => {
    $("#helpMenu").show();
  });

  // mouseleave event-handler function
  $(".dropdown-menu").on("mouseleave", () => {
    $(".dropdown-menu").hide();
  });
});
