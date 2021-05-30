function handleError(err) {
    console.log('oh no');
    console.log(err)
  }
  
  
  
  // 
  
  const updateWeather = async () => {
    const apiweatherkey = '767ba87ad7668c87ef69a25816e060a6';
    const cityname = 'Copenhagen';
    const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiweatherkey}&units=metric`;
    const weather = await fetch(weatherurl);
    const weatherData = await weather.json();
    const weatherTemp = Math.round(weatherData.main.temp);
    const weatherDesc = weatherData.weather[0].description;
    const weatherWidgetTemp = document.querySelector('.weatherDegrees');
    const weatherWidgetDesc = document.querySelector('.weatherText');
    weatherWidgetTemp.innerHTML = weatherTemp;
    weatherWidgetDesc.innerHTML = weatherDesc;
  }
  updateWeather();