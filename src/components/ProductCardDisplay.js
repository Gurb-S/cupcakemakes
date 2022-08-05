import products from '../data/data.json'

export function ProductCardDisplay() {
    const product = products.products
    console.log(product[0].product_img);
    return(
        <div className="card">
            <img src={require(`${product[0].product_img}`)} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h2>{product[0].product_name}</h2>
                <p className="card-text">{product[0].product_desc}</p>
            </div>
        </div>
    )
}