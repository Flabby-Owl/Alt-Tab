$(document).ready(function () {
  $('.collapsible').collapsible();
  $('.sidenav').sidenav();
  $("#home").show();
  $("#infos").hide();
  $("#rules").hide();
  $("#rewards").hide();
});

$("#bHome").click(function () {
  $("#home").show("slow", function () {
    $("#infos").hide("slow");
    $("#rules").hide("slow");
    $("#rewards").hide("slow");
  });
});

$("#bInfos").click(function () {
  $("#infos").show("slow", function () {
    $("#home").hide("slow");
    $("#rules").hide("slow");
    $("#rewards").hide("slow");
  });
});

$("#bRules").click(function () {
  $("#rules").show("slow", function () {
    $("#home").hide("slow");
    $("#infos").hide("slow");
    $("#rewards").hide("slow");
  });
});

$("#bRewards").click(function () {
  $("#rewards").show("slow", function () {
    $("#home").hide("slow");
    $("#infos").hide("slow");
    $("#rules").hide("slow");
  });
});

$("#bsInfos").click(function () {
  $("#infos").show("slow", function () {
    $("#home").hide("slow");
    $("#rules").hide("slow");
    $("#rewards").hide("slow");
  });
});

$("#bsRules").click(function () {
  $("#rules").show("slow", function () {
    $("#home").hide("slow");
    $("#infos").hide("slow");
    $("#rewards").hide("slow");
  });
});

$("#bsRewards").click(function () {
  $("#rewards").show("slow", function () {
    $("#home").hide("slow");
    $("#infos").hide("slow");
    $("#rules").hide("slow");
  });
});

