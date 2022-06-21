let weather = {
    "apiKey": "408c2762fda8a0e89a3a75fd0d84dbcc",
    fetchWether(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp}  °C`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}  %`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed}  km/h`;
        document.querySelector(".weather").classList.remove("hidden");
    },
    search(){
        this.fetchWether(document.querySelector(".search-bar").value);
    }

}

document.querySelector("#search-btn").addEventListener('click', function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener('keyup', function(e){
    if(e.key == "Enter"){
        weather.search();
    }
})

