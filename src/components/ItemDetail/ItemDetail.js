import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className="CardItemD">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className="Info">
                    precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;