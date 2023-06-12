function handleError(err) {
    console.log('oh no');
    console.log(err)
  }
  

  function updateTime() {         
    setTimeout(function() {   
      const time = new Date();
      const ticker = time.toLocaleTimeString('en-GB');
      document.querySelector(".timeText").innerHTML = ticker + " "; 
      updateTime();     
    }, 1000)
  }
  
  function updateText() {
    setTimeout(function() {
    let hoursText = document.querySelector(".changeText");
    let hour = new Date().getHours();
    let day = new Date().getDay();
    if (hour >= 8 && hour <= 18 && day == 1 || day == 5)
    {
      hoursText.innerHTML = "open for business.";
    }
    else
    {
    hoursText.innerHTML = "available Monday to Friday, 8 - 17.";
    }

    }, 1000)
  }

  updateTime();  
  updateText();
 
  
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