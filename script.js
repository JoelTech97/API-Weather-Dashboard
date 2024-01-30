var APIKey = "0b87f1e0b1962deefc64c45dfa0b603f";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.12579&appid=" + APIKey;
var locationInputEl = $('#location')             
 //Make the API request using Fetch
    var submitAPI =  function (event) {
      event.preventDefault();
      
      var locationInput = locationInputEl.val()
      if (!locationInput) {
        console.log('You need to fill out the form!');
        return;
      }

      fetch(queryURL)
      .then(function (response){
        return response.json();
      })
      .then(function(data){
 
    console.log(data)

  //localStorage.setItem('city',data.city.name)

  }) 
  .catch(function (error){
    console.log("Error fetching data:" , error);
  });
    }


    document.getElementById("search-form").addEventListener("submit", submitAPI);

  /* I run into issues trying to get the API data to show on the screen 
  I think I needed to append the data or something like that */