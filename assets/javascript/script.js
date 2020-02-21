var recipeID = "43295c4f";
var recipeKEY = "8ec387abba983b997fa25e14be336ccc";
var glide;

$("#home").on("click", function (event) {
  location.reload()
});
$(".flavorSavor").on("click", function (event) {
  location.reload()
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
  }).then(function (response) {
  
    for (var i = 0; i < 8; i++) {
  
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


// on click event for search button
$("#searchBtn").on("click", function (event) {
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

  }).then(function (response) {

    glide.destroy();

    $("#recipe-slide").empty();

    for (var i = 0; i < 8; i++) {

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

// on click event for search button
$("#makeMeHungry").on("click", function (event) {
  event.preventDefault();

  // Example queryURL for Giphy API
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=food&api_key=CoShZyh0kEFjLGDPzWE6e0UVIcpjTHas&limit=8";

  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {
    console.log(response)
    glide.destroy();

    $("#recipe-slide").empty();

    for (var i = 0; i < 8; i++) {

      var li = $("<li>").addClass("glide__slide");
      var div = $("<div>");
      var gif = $("<img>").attr("src", response.data[i].images.downsized_medium.url);
      gif.addClass("is-fullwidth");
      // appending all to a div
      li.append(div.append(gif));
      // adding classes
      div.addClass("sauce");
      console.log(gif)
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