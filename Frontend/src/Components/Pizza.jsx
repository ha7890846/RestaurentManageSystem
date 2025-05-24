import Pizza1 from "../assets/Pizza/classic-corn.png"
import Pizza2 from "../assets/Pizza/chatpata-tomato-onion.jpg"

const Pizza = () => {
  return (
    <>
      Pizza
      <div className="cart-items">
        <div className="cart-item">
          <div className="item-pic">
            <img src={Pizza1} height={84} width={175} alt="" />
          </div>
          <div className="item-info">
            <div>
              Classic-Corn
              <p>200</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <div>
            <img src={Pizza2} height={84} width={175} alt="" />
          </div>
          <div>
            <div>
              chatpata-tomato-onion
              <p>200</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cart-item">
          <div>
            <img src={Pizza2} height={84} width={175} alt="" />
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
export default Pizza;