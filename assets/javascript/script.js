$(document).ready(function(){
  $("#journal").on("click", function (event) {
      var loadContent = event.target.textContent
      var urlCovid = "https://api.springernature.com/metadata/json?q=keyword:covid&api_key=6dc88c6bf4873b8f5d8482c671f650cc"
      console.log(urlCovid)
      console.log(loadContent)
      $.ajax(urlCovid).done(function (response) {
          console.log(response.records);
          for (let i = 0; i < response.records.length; i++) {
              $("#article").append(`<div>
              <a href="${response.records[i].url[0].value}"><h4>${response.records[i].title}</h4></a>
              <div>${response.records[i].abstract}</div>
              <hr class="uk-description-list-divider">
              </div>`)
          }
      });
      const stats = {
          "async": true,
          "crossDomain": true,
          "url": "https://coronavirus-smartable.p.rapidapi.com/stats/v1/CA/",
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "95f51c5453mshb345dad497f1eaep1f9a07jsnf240c760a4c2",
              "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
          }
      };
      $.ajax(stats).done(function (response) {
          console.log(response);
          $("#newDeath").append(`<div>New Deaths: ${response.stats.newDeaths}</div>`);
          $("#newDeath").append(`<hr class="uk-description-list-divider">`);
          $("#newConfirmed").append(`<div>New Confirmed Cases: ${response.stats.newlyConfirmedCases}</div>`);
          $("#newConfirmed").append(`<hr class="uk-description-list-divider">`);
          $("#newRecovered").append(`<div>New Recovered Cases: ${response.stats.newlyRecoveredCases}</div>`);
          $("#newRecovered").append(`<hr class="uk-description-list-divider">`);
          $("#totalConfirmed").append(`<div>Total Confirmed Cases: ${response.stats.totalConfirmedCases}</div>`);
          $("#totalConfirmed").append(`<hr class="uk-description-list-divider">`);
          $("#totalDeaths").append(`<div>Total Deaths: ${response.stats.totalDeaths}</div>`);
          $("#totalDeaths").append(`<hr class="uk-description-list-divider">`);
          $("#totalRecovered").append(`<div>Total Recovered Cases: ${response.stats.totalRecoveredCases}</div>`);
      });

       const news = {
          "async": true,
          "crossDomain": true,
          "url": "https://coronavirus-smartable.p.rapidapi.com/news/v1/CA/",
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "95f51c5453mshb345dad497f1eaep1f9a07jsnf240c760a4c2",
              "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
            }
      };
      $.ajax(news).done(function (response) {
          console.log(response);
          for (let i = 0; i <= 30; i++) {
              $("#news").append(`<div>
              <a href="${response.news[i].webUrl}"><h4>${response.news[i].title}</h4></a>
              <div>${response.news[i].excerpt}</div>
              <hr class="uk-description-list-divider">
              </div>`)
          }
      });

    const cadStats = {
        "url": "https://api.opencovid.ca/summary"
    };

    $.ajax(cadStats).done(function (response){
        console.log(response)
        for (let i = 0; i < 14 ; i++) {
            $("#cadStats").append(`<div>
              <dt>${response.summary[i].province}</dt>
              <dd>Active Cases: ${response.summary[i].active_cases}</dd>
              <dd>Cumulative Cases: ${response.summary[i].cumulative_cases}</dd>
              <dd>Cumulative Vaccine: ${response.summary[i].cumulative_avaccine}</dd>
              <dd>Cumulative Recovered: ${response.summary[i].cumulative_recovered}</dd>
              <dd>Testing: ${response.summary[i].testing}</dd>
              <dd>Deaths: ${response.summary[i].deaths}</dd>
              <hr class="uk-description-list-divider">
            </div>`)
        }
    })
});
});
// });

$("#newsletter").on("click", function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var news = []
    
    console.log(name);
    console.log(email);

    news.push(name, email);
    $("#newsletter").empty();

    localStorage.setItem("newsletter", JSON.stringify(news));

    window.location.href = "newsletter.html";

})