import burger1 from "../assets/burger/chickenBurger.jpeg";
const Burgers = () => {
  return (
    <>
      burger
      <div className="cart-items">
        <div className="cart-item">
          <div className="item-pic">
            <img src={burger1}  width={175} alt="" />
          </div>
          <div className="item-info">
            <div>
              Chicken Burger
              <p>200</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <div>
            <img src={burger1} height={84} width={175} alt="" />
          </div>
          <div>
            <div>
              Chicken Burger
              <p>200</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cart-item">
          <div>
            <img src={burger1} height={84} width={175} alt="" />
          </div>
          <div>
            Chicken Burger
            <p>200</p>
            <button className="additem-btn">+</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Burgers;
