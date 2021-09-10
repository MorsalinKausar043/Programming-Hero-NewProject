// const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
// const searchTemperature = () => {
//     const city = document.getElementById('city-name').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data));
// }

// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }

// const displayTemperature = temperature => {
//     setInnerText('city', temperature.name);
//     setInnerText('temperature', temperature.main.temp);
//     setInnerText('condition', temperature.weather[0].main);
//     // set weather icon
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }

const city_name = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");

const API_KEY = `c5c5bd53ec54fa0e029a1528ee96f9db`;

const searchTemperature = async () => {
    try
    {
        const city_Name = city_name.value;
        if (city_Name === "")
        {
            alert("Please fill the inputBox");
        } else
        {
            const fetchData = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_Name}&appid=${API_KEY}&units=metric`)).json();
            fetchData.message === "city not found" ? alert("City Not Found") : SetDisplayTempreture(fetchData);
        }
        
    } catch (error)
    {
        console.log(error);
    }
};

const setInnerText = (id,value) => {
    document.getElementById(id).innerText = value;
}

const SetDisplayTempreture = (getTemApi) => {
    const { main: { temp }, name, weather } = getTemApi;
    setInnerText("temperature", temp);
    setInnerText("city", name);
    setInnerText("condition", weather[0].main);
    const URL = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", URL);
}