const searchInput = document.querySelector("#searchInput")
const searchForm = document.querySelector("#searchForm")
const temp = document.querySelector("#temp")
const city = document.querySelector("#weather_location")
const description = document.querySelector("#weather_description")
const weathericon = document.querySelector("#weather_icon")
const weather = document.querySelector("#weather")
const error = document.querySelector("#error")

const apiCall = async () => {

    try {

        const base_url =`https://api.weatherapi.com/v1/current.json?key=e74bc0e20a9b4cd98cf102934262305&q=${searchInput.value}`

        const response = await fetch(base_url)

        const data = await response.json();

        if (data.error) {

            console.error(data.error.message)

            weather.style.display = "none";
            error.style.display = "block";

            return;
        }

        error.style.display = "none";
        weather.style.display = "block";

        temp.innerText = data.current.temp_c + "°C";
        city.innerText = data.location.name;
        description.innerText = data.current.condition.text;
        weathericon.src = "https:"+data.current.condition.icon;

    } catch (error) {

        console.error(error);

    }
}

const submitHandler = (e) => {

    e.preventDefault();

    apiCall();
}

searchForm.addEventListener("submit", submitHandler)