import products from '../data/data.json'


export function ProductCardDisplay() {
    return(
        <div className="card">
            <img src={require(products[0].product_img)} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h2>{products[0].product_name}</h2>
                <p className="card-text">{products[0].product_desc}</p>
            </div>
        </div>
    )
}