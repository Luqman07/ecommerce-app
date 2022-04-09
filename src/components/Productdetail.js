const Productdetail = ({ product }) => {
    return (
        <div className="cart-img-container">
            <img className="img-responsive" src={product.image} alt="product-img"  />

            <div className="img-overlay">
                <p className="category">{product.category}</p>
                <p className="product">{product.name}</p>
                <p className="price">${product.price}</p>
                <button>BUY NOW</button>
            </div>
        </div>
    );
}
 
export default Productdetail;