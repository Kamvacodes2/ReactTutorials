function WeatherInfo({ weatherData, cityName }) {

    return (
            <div className="weather-info text-center card bg-light">
            <h3>{cityName}</h3>
                <i className="bi bi-cloud-haze text-center display-2 text-warning"></i>
                {
                    typeof weatherData.main == "undefined" ? (
                        <p>No data found</p>
                    ) : (

            }