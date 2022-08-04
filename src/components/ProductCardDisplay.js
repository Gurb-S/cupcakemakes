import data from '../data/data.json'
import { Display } from './Display';
import { ProductCard } from './ProductCard';

export function ProductCardDisplay() {

    let key = 0;
    const cards = data.map((card) =>{
        key++;
        return <ProductCard 
            img={card.product_img}
            name={card.product_name}
            desc={card.product_desc}
            />
    })
    return(
        <Display info={cards}/>
    )
}