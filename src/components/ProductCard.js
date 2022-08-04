export function ProductCard(props) {
    return(
        <div className="card">
            <img src={require(props.cards.img)} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h2>{props.cards.name}</h2>
                <p className="card-text">{props.cards.desc}</p>
            </div>
        </div>
    )
}