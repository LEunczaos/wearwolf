import { useCart } from "../context/CartContext";
import products from "../data/product";
import "../styles/shop.css";

function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="shop">

      <h1 className="shop__title">SHOP COLLECTION</h1>

      <div className="shop__grid">

        {products.map((product) => (
          <div className="product" key={product.id}>

            <div className="product__image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product__info">

              <h3>{product.name}</h3>

              <p className="price">{product.price}$</p>

              {/* VARIANTS */}
              <div className="product__colors">

                {product.variants.map((variant, index) => (
                  <span
                    key={index}
                    className="color"
                    style={{ background: variant.color }}
                  ></span>
                ))}

              </div>

              <button onClick={() => addToCart(product)}>
                ADD TO CART
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Shop;