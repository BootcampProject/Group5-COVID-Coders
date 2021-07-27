$(document).ready(function(){

    $("#journal").on("click", function (event) {
        var loadContent = event.target.textContent
        var urlCovid = "http://api.springernature.com/metadata/pam?q=keyword:covid&api_key=6dc88c6bf4873b8f5d8482c671f650cc"
        console.log(urlCovid)
        console.log(loadContent)

        // $("#journal2").on("click", function (event) {
        //     var loadContent = event.target.textContent
        //     var urlCovid = "https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/RESTful/tmTool.cgi/Chemical/19894120/JSON/"
        //     console.log(urlCovid)
        //     console.log(loadContent)

            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/",
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "95f51c5453mshb345dad497f1eaep1f9a07jsnf240c760a4c2",
                    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
                }
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);
            });

});
});
// });
