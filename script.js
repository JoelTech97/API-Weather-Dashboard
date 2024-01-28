var APIKey = "0b87f1e0b1962deefc64c45dfa0b603f";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.12579&appid=" + APIKey;
             
 //Make the API request using Fetch
fetch(queryURL)
  .then(function (response){
    return response.json();
  })
  .then(function(data){

    document.getElementById("search-form").addEventListener("submit", function (event) {
        event.preventDefault();
      
        var searchInput = document.getElementById("search-input").value;
        if (searchInput.trim() !== "") {
          getWeatherData(searchInput)
            .then(function (data) {
              // Handle the data and update UI
              console.log(data);
              updateTodaySection(data);
              updateForecastSection(data);
            });
        }
      });

 
  console.log(data)  
  console.log(data.city.name)

  localStorage.setItem("city", data.city)

  })

