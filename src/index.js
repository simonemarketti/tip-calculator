/* Global variables */
let bill = 0;
let tip = 0.15;
let people = 0;
let tipAmount = 0;
let total = 0;

/* Bill section */
$(".input-bill").on("keyup", function () {
  bill = parseInt($(this).val()) || 0;
  calculate();
});

/* Tip section */
$(".button-tip").each(function () {
  $(this).on("click", function () {
    $(".button-tip").each(function () {
      $(this).removeClass("is-active");
      $(this).removeAttr("autofocus");
    });
    tip = parseInt($(this).text()) / 100;
    $(this).addClass("is-active");
    $(".input-custom").val("");
    calculate();
  });
});

$(".input-custom").on("focus", function () {
  $(".button-tip").each(function () {
    $(this).removeClass("is-active");
    $(this).removeAttr("autofocus");
  });
});

$(".input-custom").on("keyup", function () {
  tip = parseInt($(this).val()) / 100 || 0;
  calculate();
});

/* People section */
$(".input-people").on("keyup", function () {
  people = parseInt($(this).val()) || 0;
  if ($(this).val() != 0) {
    $(this).removeClass("is-danger");
    $(".error-message").addClass("is-invisible");
  } else {
    $(this).addClass("is-danger");
    $(".error-message").removeClass("is-invisible");
  }
  calculate();
});

/* Output */
$(".reset-button").on("click", function () {
  bill = 0;
  tip = 0.15;
  people = 0;
  $(".input-bill").val("");
  $(".input-custom").val("");
  $(".input-people").val("");
  $(".output-total").text("0.00");
  $(".output-tip").text("0.00");
  $(".button-tip").each(function () {
    $(this).removeClass("is-active");
    $(this).removeAttr("autofocus");
  });
  $(".button-active").addClass("is-active");
  $(".button-active").focus();
  $(".input-people").removeClass("is-danger");
  $(".error-message").addClass("is-invisible");
});

/* Functions */
const calculate = function () {
  total = parseFloat(bill / people).toFixed(2);
  tipAmount = parseFloat((bill / people) * tip).toFixed(2);
  if (people != 0 && bill != 0) {
    $(".output-total").text(total);
    $(".output-tip").text(tipAmount);
  } else {
    $(".output-total").text("0.00");
    $(".output-tip").text("0.00");
  }
};
