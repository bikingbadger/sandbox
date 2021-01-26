const weatherPlugin = options => {
  // Default Options
  let defaults = {
    selector: ".temperature",
    units: "M",
    message: "It's currently {temp} with wind speed {wind_spd} in {city_name}",
    showIcon: true,
  };

  // Merge any user options into the defaults
  var settings = Object.assign(defaults, options);

  // Selector
  const tempSelector = document.querySelector(settings.selector);

  // Location API URL
  const locationAPI = "https://ipapi.co/json/";

  // Weather API URL with parameters that can change
  const weatherAPI =
    "https://api.weatherbit.io/v2.0/current?key=284801ec4def4dcca381cdb8008bf182";
  const units = "&units=" + settings.units;
  const latParam = "&lat=";
  const longParam = "&lon=";

  /**
   * Sanitize and encode all HTML in a user-submitted string
   * @param  {String} str  The user-submitted string
   * @return {String} str  The sanitized string
   */
  var sanitizeHTML = function(str) {
    var temp = document.createElement("div");
    temp.textContent = str;
    return temp.innerHTML;
  };

  /**
   * Replace the variables in curly brackets with the data from the weather
   * @param {Object} weather object
   * @return (String) message with substituted data
   */
  const replaceTemplateVariables = weather => {
    try {
      let regexp = /{(.*?)}/g;
      let message = settings.message;
      let array = [...message.matchAll(regexp)];
      array.forEach(element => {
        message = message.replace(element[0], eval("weather." + element[1]));
      });
      return message;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  /**
   * Build the HTML for the weather plugin
   * @param {Object} weather
   */
  const setWeather = weather => {
    tempSelector.innerHTML = settings.showIcon
      ? "<p>" +
        '<img src="https://www.weatherbit.io/static/img/icons/' +
        sanitizeHTML(weather.weather.icon) +
        '.png">' +
        "</p>"
      : "";

    tempSelector.innerHTML +=
      "<p>" + sanitizeHTML(replaceTemplateVariables(weather)) + "</p>";
  };

  // Fetch the weather based on the IP
  fetch(locationAPI)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(data => {
      // Save location data to variable
      let location = data;
      if (location.latitude && location.longitude) {
        let weatherURL = `${weatherAPI}${latParam}${location.latitude}${longParam}${location.longitude}${units}`;
        return fetch(weatherURL);
      } else {
        return Promise.reject("Could not get location via IP");
      }
    })
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(data => {
      setWeather(data.data[0]);
      return;
    })
    .catch(err => {
      tempSelector.innerHTML = `Error fetching weather data ${err}`;
    });
};
