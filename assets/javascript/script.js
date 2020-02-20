// var recipeID = "f918aaaf";
// var recipeKEY = "8b9bf08b57c94197c63717a122f611d7";
$(".glide").hide();

// on click event for search button
$("#searchBtn").on("click", function (e) {
    // displaying the gliders
    $(".glide").show();
    
    var search = $(".input").val().trim();
    var recipeURL = "https://api.edamam.com/search?app_key=8b9bf08b57c94197c63717a122f611d7&app_id=f918aaaf&q=" + search + "&to=18";

    $.ajax({
        url: recipeURL,
        method: "GET"

    }).then(function (response) {
        console.log(response)
        console.log(response.hits[0].recipe.label);
        console.log(response.hits[0].recipe.image);
        console.log(response.hits[0].recipe.url);
        console.log(response.hits[0].recipe.yield);

        var label = $("<h3>").text(response.hits[0].recipe.label);
        var url = $("<a>").attr("href", response.hits[0].recipe.url).text("Go To Recipe");
        var yields = $("<h5>").text("Yields: " + response.hits[0].recipe.yield);
        var image = $("<img>").attr("src", response.hits[0].recipe.image);

        // to link and append to carousel
        $("#").append(label);
        $("#").append(url);
        $("#").append(yields);
        $("#").append(image);
    });
});


// displaying when the page opens 
var recipeURL = "https://api.edamam.com/search?app_key=" + recipeKEY + "&app_id=" + recipeID + "&q=recipe" + "&to=18";

$.ajax({
    url: recipeURL,
    method: "GET"

}).then(function (response) {
    for (var i = 0; i < 8; i++) {
        console.log(response)

        console.log(response.hits[i].recipe.label);
        console.log(response.hits[i].recipe.image);
        console.log(response.hits[i].recipe.url);
        console.log(response.hits[i].recipe.yield);
        // creating variables for html elements 
        var div = $("<div>");
        var label = $("<h3>").text(response.hits[i].recipe.label);
        var url = $("<a>").attr("href", response.hits[i].recipe.url).text("Go To Recipe");
        var yields = $("<h5>").text("Yields: " + response.hits[i].recipe.yield);
        var image = $("<img>").attr("src", response.hits[i].recipe.image);
        // appending all to a div
        div.append(
            label,
            url,
            yields,
            image
        );
        // adding classes
        div.addClass("sauce");

        // to link and append to page
        $("#homeRecipes").append(div);

    }

});