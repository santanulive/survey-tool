import "../css/CardHolder.css";

const CardHolder=(props)=>{
    return(
        <div className="app-cardHolder">
            {props.children}
        </div>
    )
}

export default CardHolder;