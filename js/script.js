/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Money",
"You give love a bad name",
"Just fine"];

var youtubeLinks = ["https://www.youtube.com/watch?v=zUOh09GoQgk",
"https://www.youtube.com/watch?v=KrZHPOeOxQQ",
"https://www.youtube.com/watch?v=G6ZjBPXSmnE"];
var artists=["Cardi B",
"Bon Jovi",
"Mary J.Blidge"]
var songLengths=["3:35",
"3:54",
"4:00"]
var imageslink=["https://thatgrapejuice.net/wp-content/uploads/2018/10/cardi-b-money-promo-tgj-600x600.jpg",
"https://images.rapgenius.com/daca3e271f8a4f844c3a716ba6bc9ada.200x194x1.jpg",
"https://img.discogs.com/8ESVmhTotQZ2CArNjTKinsqA5cE=/fit-in/600x462/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1284520-1299623672.jpeg.jpg",]
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above




function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(song){
    $("#songs").append("<p>" + song + "</p>") 
 });
 songLengths.forEach(function(songLength){
    $("#lengths").append("<p>" + songLength + "</p>") 
 });
 
 imageslink.forEach(function(link){
    $("#images").append("<img src='" + link + "'>") 
 });
 
 artists.forEach(function(artist){
    $("#artists").append("<p>" +artist + "</p>") 
 });
 youtubeLinks.forEach(function(youtubeLink){
    $("#links").append("<a href='" + youtubeLink +"'>Listen Here</a>") 
 });
 
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
