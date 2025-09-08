import {React} from "react";

function CardPersonalizado(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
       </div>
    )
}

    export default CardPersonalizado;