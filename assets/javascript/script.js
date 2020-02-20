var recipeID = "f918aaaf";
var recipeKEY = "8b9bf08b57c94197c63717a122f611d7";
var glide;

// on click event for search button
$("#searchBtn").on("click", function(event) {
  event.preventDefault();
  var search = $("#search").val();
  console.log(search);

  var recipeURL =
    "https://api.edamam.com/search?app_key=" +
    recipeKEY +
    "&app_id=" +
    recipeID +
    "&q=" +
    search +
    "&to=18";

  $.ajax({
    url: recipeURL,
    method: "GET"
  }).then(function(response) {
    glide.destroy();
    $("#recipe-slide").empty();
    for (var i = 0; i < 8; i++) {
      // console.log(response);

      // console.log(response.hits[i].recipe.label);
      // console.log(response.hits[i].recipe.image);
      // console.log(response.hits[i].recipe.url);
      // console.log(response.hits[i].recipe.yield);
      // creating variables for html elements
      var li = $("<li>").addClass("glide__slide");
      var div = $("<div>");
      var label = $("<h3>").text(response.hits[i].recipe.label);
      var url = $("<a>")
        .attr("href", response.hits[i].recipe.url)
        .text("Go To Recipe");
      var yields = $("<h5>").text("Yields: " + response.hits[i].recipe.yield);
      var image = $("<img>").attr("src", response.hits[i].recipe.image);
      // appending all to a div
      li.append(div.append(label, url, yields, image));
      // adding classes
      div.addClass("sauce");

      // to link and append to page
      $("#recipe-slide").append(li);
    }
    glide = new Glide(".glide", {
      type: "carousel",
      gap: "10px",
      perView: 4
    }).mount();
  });
});

// displaying when the page opens
var recipeURL =
  "https://api.edamam.com/search?app_key=" +
  recipeKEY +
  "&app_id=" +
  recipeID +
  "&q=recipe" +
  "&to=18";

$.ajax({
  url: recipeURL,
  method: "GET"
}).then(function(response) {
  for (var i = 0; i < 8; i++) {
    // console.log(response);

    // console.log(response.hits[i].recipe.label);
    // console.log(response.hits[i].recipe.image);
    // console.log(response.hits[i].recipe.url);
    // console.log(response.hits[i].recipe.yield);
    // creating variables for html elements
    var li = $("<li>").addClass("glide__slide");
    var div = $("<div>");
    var label = $("<h3>").text(response.hits[i].recipe.label);
    var url = $("<a>")
      .attr("href", response.hits[i].recipe.url)
      .text("Go To Recipe");
    var yields = $("<h5>").text("Yields: " + response.hits[i].recipe.yield);
    var image = $("<img>").attr("src", response.hits[i].recipe.image);
    // appending all to a div
    li.append(div.append(label, url, yields, image));
    // adding classes
    div.addClass("sauce");

    // to link and append to page
    $("#recipe-slide").append(li);
  }
  glide = new Glide(".glide", {
    type: "carousel",
    gap: "10px",
    perView: 4
  }).mount();
});