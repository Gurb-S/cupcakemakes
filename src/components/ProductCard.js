export function ProductCard() {
    return(
        <div className="card">
            <img src={require("../imgs/flower.jpeg")} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h2>Flower Cupcake</h2>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}