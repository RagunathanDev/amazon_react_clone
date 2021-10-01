import "./Header.css";
import productImage from "../data/Image/productImage.png";

function Header() {
  return (
    <div className="Header__Container">
      <div className="Header__ProductImg">
        <img src={productImage} className="ProductImage" alt="productImage" />
      </div>
    </div>
  );
}

export default Header;
