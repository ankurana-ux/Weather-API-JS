let searchBtn = document.getElementById("search-btn")
let cityInp = document.getElementById("city-inp")

searchBtn.addEventListener("click", function(){
    let cityName = cityInp.value
    let api = "59db206e459ed23037e95d1ffd0bfb90"
    let finalUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`
    let forCastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api}&units=metric`
    console.log(finalUrl)
    console.log(forCastUrl)
    fetch(finalUrl).then((response) => response.json()).then((data) => {        
        // console.log(data[0])
        // console.log(data)
        // console.log(data.name)
        // console.log(data.main.temp)
        // console.log(data.weather[0].description)
        // console.log(data.weather[0].icon)
        // console.log(data.weather[0].main)
        // console.log(data.main.humidity)
        // console.log(data.wind.speed)

        let iconCode = data.weather[0].icon
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

        result.innerHTML = `<h4> ${data.name} <h4>
                            <h1> ${data.main.temp}°C </h1>
                            <img src="${iconUrl}" alt="Weather Icon">
                            <p> Weather:${data.weather[0].description} </p>
                            <p> Weather: ${data.weather[0].main} </p>
                            <p> Hunidity: ${data.main.humidity} </p>
                            <p> Wind Speed: ${data.wind.speed} </p>`
    })
    fetch(forCastUrl).then((response) => response.json()).then((data) =>{
        //console.log(data[0])
        //console.log(data)
        let forecastIconCode = data.list[0].weather[0].icon
        let forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIconCode}@2x.png`

        hourly.innerHTML = `<div id="containter">
                                <p> Weather:<br>
                                    ${data.list[1].dt_txt.split(" ")[1].split(":")[0]} <br> 
                                    <img src="https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png" alt="Weather Icon"> <br>
                                    ${data.list[1].main.temp}°C 
                                </p>

                                <p> Weather:<br>
                                    ${data.list[2].dt_txt.split(" ")[1].split(":")[0]} <br> 
                                    <img src="https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png" alt="Weather Icon"> <br>
                                    ${data.list[2].main.temp}°C 
                                </p>

                                <p> Weather:<br>
                                    ${data.list[3].dt_txt.split(" ")[1].split(":")[0]} <br> 
                                    <img src="https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png" alt="Weather Icon"> <br>
                                    ${data.list[3].main.temp}°C 
                                </p>

                                <p> Weather:<br>
                                    ${data.list[4].dt_txt.split(" ")[1].split(":")[0]} <br> 
                                    <img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png" alt="Weather Icon"> <br>
                                    ${data.list[4].main.temp}°C 
                                </p>

                                <p> Weather:<br>
                                    ${data.list[5].dt_txt.split(" ")[1].split(":")[0]} <br> 
                                    <img src="https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png" alt="Weather Icon"> <br>
                                    ${data.list[5].main.temp}°C 
                                </p>
                            </div>`
    })
    .catch(() => {
        if(cityName.length == 0 ){
            result.innerHTML = `<h3> The input field cannot be empty </h3>`
        } else {
            result.innerHTML = `<h3> Please enter a correct name </h3>`
        }
    })
})