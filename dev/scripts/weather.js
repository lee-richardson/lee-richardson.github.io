function handleError(err) {
    console.log('oh no');
    console.log(err)
  }
  

  function updateTime() {         
    setTimeout(function() {   
      const time = new Date();
      // const ticker = time.toLocaleTimeString('en-GB', ([], { hour: "2-digit", minute: "2-digit" }));
      const ticker = time.toLocaleTimeString('en-GB', ([], { hour: "2-digit", minute: "2-digit"}));
      document.querySelector(".timeText").innerHTML = ticker + " "; 
      updateTime();     
    }, 1000)
  }
  
  function updateText() {
    setTimeout(function() {
    let hoursText = document.querySelector(".changeText");
    let hour = new Date().getHours();
    let day = new Date().getDay();
    if (hour >= 8 && hour <= 15)
    {
      hoursText.innerHTML = "open for business.";
    }
    else
    {
    hoursText.innerHTML = "available weekdays 8 - 18.";
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


  document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".sliding-footer");
    let prevScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
            // Scrolling down
            footer.style.bottom = "0";
        } else {
            // Scrolling up
            footer.style.bottom = "-100px";
        }

        prevScrollY = currentScrollY;
    });
});
