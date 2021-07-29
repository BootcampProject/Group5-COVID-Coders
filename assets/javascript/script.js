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
            $("#cadStats").append(`<div>
                <dt id="alberta">${response.summary[0].province}</dt>
                <dd>Active Cases: ${response.summary[0].active_cases}</dd>
                <dd>Cumulative Cases: ${response.summary[0].cumulative_cases}</dd>
                <dd>Cumulative Vaccine: ${response.summary[0].cumulative_avaccine}</dd>
                <dd>Cumulative Recovered: ${response.summary[0].cumulative_recovered}</dd>
                <dd>Testing: ${response.summary[0].testing}</dd>
                <dd>Deaths: ${response.summary[0].deaths}</dd>
                <hr class="uk-description-list-divider">
            </div>`)

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="britishColumbia">${response.summary[1].province}</dt>
                    <dd>Active Cases: ${response.summary[1].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[1].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[1].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[1].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[1].testing}</dd>
                    <dd>Deaths: ${response.summary[1].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="manitobia">${response.summary[2].province}</dt>
                    <dd>Active Cases: ${response.summary[2].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[2].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[2].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[2].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[2].testing}</dd>
                    <dd>Deaths: ${response.summary[2].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="newBrunswick">${response.summary[3].province}</dt>
                    <dd>Active Cases: ${response.summary[3].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[3].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[3].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[3].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[3].testing}</dd>
                    <dd>Deaths: ${response.summary[3].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="newfoundland">${response.summary[4].province}</dt>
                    <dd>Active Cases: ${response.summary[4].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[4].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[4].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[4].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[4].testing}</dd>
                    <dd>Deaths: ${response.summary[4].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="novaScotia">${response.summary[5].province}</dt>
                    <dd>Active Cases: ${response.summary[5].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[5].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[5].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[5].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[5].testing}</dd>
                    <dd>Deaths: ${response.summary[5].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="nunavut">${response.summary[6].province}</dt>
                    <dd>Active Cases: ${response.summary[6].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[6].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[6].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[6].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[6].testing}</dd>
                    <dd>Deaths: ${response.summary[6].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="northwest">${response.summary[7].province}</dt>
                    <dd>Active Cases: ${response.summary[7].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[7].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[7].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[7].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[7].testing}</dd>
                    <dd>Deaths: ${response.summary[7].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="ontario">${response.summary[8].province}</dt>
                    <dd>Active Cases: ${response.summary[8].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[8].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[8].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[8].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[8].testing}</dd>
                    <dd>Deaths: ${response.summary[8].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="pei">${response.summary[9].province}</dt>
                    <dd>Active Cases: ${response.summary[9].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[9].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[9].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[9].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[9].testing}</dd>
                    <dd>Deaths: ${response.summary[9].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="quebec">${response.summary[10].province}</dt>
                    <dd>Active Cases: ${response.summary[10].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[10].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[10].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[10].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[10].testing}</dd>
                    <dd>Deaths: ${response.summary[10].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="saskatchewan">${response.summary[12].province}</dt>
                    <dd>Active Cases: ${response.summary[12].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[12].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[12].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[12].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[12].testing}</dd>
                    <dd>Deaths: ${response.summary[12].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })

        $.ajax(cadStats).done(function (response){
            console.log(response)
                $("#cadStats").append(`<div>
                    <dt id="yukon">${response.summary[13].province}</dt>
                    <dd>Active Cases: ${response.summary[13].active_cases}</dd>
                    <dd>Cumulative Cases: ${response.summary[13].cumulative_cases}</dd>
                    <dd>Cumulative Vaccine: ${response.summary[13].cumulative_avaccine}</dd>
                    <dd>Cumulative Recovered: ${response.summary[13].cumulative_recovered}</dd>
                    <dd>Testing: ${response.summary[13].testing}</dd>
                    <dd>Deaths: ${response.summary[13].deaths}</dd>
                    <hr class="uk-description-list-divider">
                </div>`)
        })
    })

    // $.ajax(cadStats).done(function (response){
    //     console.log(response)
    //     for (let i = 0; i < 14 ; i++) {
    //         $("#cadStats").append(`<div>
    //           <dt>${response.summary[i].province}</dt>
    //           <dd>Active Cases: ${response.summary[i].active_cases}</dd>
    //           <dd>Cumulative Cases: ${response.summary[i].cumulative_cases}</dd>
    //           <dd>Cumulative Vaccine: ${response.summary[i].cumulative_avaccine}</dd>
    //           <dd>Cumulative Recovered: ${response.summary[i].cumulative_recovered}</dd>
    //           <dd>Testing: ${response.summary[i].testing}</dd>
    //           <dd>Deaths: ${response.summary[i].deaths}</dd>
    //           <hr class="uk-description-list-divider">
    //         </div>`)
    //     }
    // })
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