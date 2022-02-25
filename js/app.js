$(document).ready(function () {
  //Seciones impares por raton
  $("section:even").on("mouseenter", function () {
    $(this).find("div").slideDown("slow");
  });
  $("section:even").on("mouseleave", function () {
    $(this).find("div").slideUp("slow");
  });

  //Secciones pares con doble click
  $("section:odd").on("dblclick", function () {
    $(this).find("div").slideDown("slow");
  });

  //Boton cerrar
  $("section div button").on("mouseenter", function () {
    $("section div button img").css("scale", "1.3");
  });

  $("section div button").on("mouseleave", function () {
    $("section div button img").css("scale", "1");
  });

  $("section div button").on("click", function () {
    $(this).parent().slideUp("slow");
    $("section div button img").slideUp("slow");
  });

  //Botones nav
  $("nav > a").on("click", function () {
    let pais = $(this).html();
    if (pais == "London") {
      $("section:last-of-type").slideToggle("slow");
    } else if (pais == "Madrid") {
      $("section:first-of-type").slideToggle("slow");
    } else {
      $("section:nth-of-type(2)").slideToggle("slow");
    }
  });
});
