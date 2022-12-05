import "./LocationCard.css";
import { Link, useParams } from "react-router-dom";

function LocationCard(props) {
    console.log(props)

    return (
        <section>
            <h3>{`${props.locationName}`}</h3>
            <img src={`${props.icon}`} />
            <h3>{`${props.description}`}</h3>
            <p>{`${props.temperature} °C`}</p>
            <p>{`${props.wind} meter/sec`}</p>
        </section>
    );
};

export default LocationCard;