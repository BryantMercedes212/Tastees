import "./ProductDisplay.css";

const formatPrice = (price) => `$${price.toFixed(2)}`;

const ProductDisplay = (props) => {
  const { name, img, id, price, description } = props.product;

  return (
    <div className="products">
      <div className="box">
        <div className="slide-img">
          <img src={img} alt={id}></img>
        </div>
        <div className="detail-box">
          <div className="type">
            <a href="#"> {name}</a>
            <span> sativa</span>
          </div>
          <a href="#" className="price">
            {formatPrice(price)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
