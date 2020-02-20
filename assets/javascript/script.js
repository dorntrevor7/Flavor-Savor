var recipeID = "f918aaaf";
var recipeKEY = "8b9bf08b57c94197c63717a122f611d7";

// on click event for search button
$("#searchBtn").on("click", function(event){
    event.preventDefault();
    var search = $("#search").val();
    console.log(search);

    var recipeURL = "https://api.edamam.com/search?app_key=" + recipeKEY + "&app_id=" + recipeID + "&q=" + search + "&to=18"; 

$.ajax({
    url: recipeURL,
    method: "GET"
    
}).then(function(response){

    // var label=  $("<h3>").text(response.hits[0].recipe.label);
    var url = $("<a>").attr("href", response.hits[0].recipe.url).text(response.hits[0].recipe.label)
    var image = $("<img>").attr("src", response.hits[0].recipe.image);

// to link and append to carousel
        $("#recipe1").append(url).append(image);
    });
});