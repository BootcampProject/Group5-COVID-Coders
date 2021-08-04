$(document).ready(function (){
    var newsLetter = JSON.parse(localStorage.getItem("newsletter"))
    console.log(newsLetter)

    $("#getname").text(newsLetter[0])
    $("#getemail").text(newsLetter[1])

})