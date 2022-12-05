
import { useEffect, useState } from "react";
import LocationCard from "../components/locationCard/LocationCard";


function Home() {
    console.log(process.env.REACT_APP_API_KEY)

    const [cityInput, setCityInput] = useState("Berlin");
    const [weatherObject, setWeatherArray] = useState();

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=de`)
            .then(response => response.json())
            .then(weatherAPI => {
                setWeatherArray(weatherAPI);
                console.log(weatherAPI);
            });
        //Durch useEffect wird es nur einmal gerendert. Durch die Angabe hier in dem Array,
        //wird immer wieder gerendert wenn die Variable sich ändert
    }, [cityInput]);


    const chooseCityHamburg = () => {
        setCityInput("Hamburg")
    }

    const chooseCityBerlin = () => {
        setCityInput("Berlin")
    }


    let iconID = weatherObject?.weather[0].icon
    console.log(iconID)
    return (
        <section className="home">

            <button onClick={chooseCityHamburg}>Hamburg</button>
            <button onClick={chooseCityBerlin}>Berlin</button>




            {/* Falls useState undefinded ist (hab ich standardmäßig gerade so gesetzt)
            Dann soll die Komponente aufgerufen werden, sonst das div */}
            {/* {console.log(weatherObject.weather[0].icon)} */}

            {weatherObject ?

                <LocationCard
                    locationName={weatherObject.name}
                    // icon={weatherObject.weather[0].icon}
                    icon={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
                    description={weatherObject.weather[0].description}
                    temperature={weatherObject.main.temp}
                    wind={weatherObject.wind.speed}
                /> : <div>Loading...</div>}



        </section>
    );
};
export default Home;