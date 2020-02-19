var recipeID = "f918aaaf";
var recipeKEY = "8b9bf08b57c94197c63717a122f611d7";
search = $(".input").val();

// on click event for search button
$("#searchBtn").on("click", function(e){
    var recipeURL = "https://api.edamam.com/search?app_key=" + recipeKEY + "&app_id=" + recipeID + "&q=" + search + "&to=18"; 

$.ajax({
    url: recipeURL,
    method: "GET"
    
}).then(function(response){

    console.log(response.hits[0].recipe.label);
    console.log(response.hits[0].recipe.image);
    console.log(response.hits[0].recipe.url);
    console.log(response.hits[0].recipe.yield);

    var label=  $("<h3>").text(response.hits[0].recipe.label);
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