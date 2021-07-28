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
              <h4>${response.records[i].title}</h4>
              <a href="${response.records[i].url[0].value}">Link</a>
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
          $("#newConfirmed").append(`<div>New Confirmed Cases: ${response.stats.newlyConfirmedCases}</div>`);
          $("#newRecovered").append(`<div>New Recovered Cases: ${response.stats.newlyRecoveredCases}</div>`);
          $("#totalConfirmed").append(`<div>Total Confirmed Cases: ${response.stats.totalConfirmedCases}</div>`);
          $("#totalDeaths").append(`<div>Total Deaths: ${response.stats.totalDeaths}</div>`);
          $("#totalRecovered").append(`<div>Total Recovered Cases: ${response.stats.totalRecoveredCases}</div>`);
      });
    //   $.ajax(stats).done(function (response) {
    //     console.log(response);
    //     $("#stats").append(`<div>New Deaths:${response.stats.newDeaths}</div>`);
    //     $("#stats").append(`<div>New Confirmed Cases:${response.stats.newlyConfirmedCases}</div>`);
    //     $("#stats").append(`<div>New Recovered Cases:${response.stats.newlyRecoveredCases}</div>`);
    //     $("#stats").append(`<div>Total Confirmed Cases:${response.stats.totalConfirmedCases}</div>`);
    //     $("#stats").append(`<div>Total Deaths:${response.stats.totalDeaths}</div>`);
    //     $("#stats").append(`<div>Total Recovered Cases:${response.stats.totalRecoveredCases}</div>`);
    // });
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
          for (let i = 0; i <= 15; i++) {
              $("#news").append(`<div>
              <h4>${response.news[i].title}</h4>
              <a href="${response.news[i].webUrl}">Link</a>
              <div>${response.news[i].excerpt}</div>
              </div>`)
          }
      });
});
});
// });