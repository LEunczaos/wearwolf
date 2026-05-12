import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard