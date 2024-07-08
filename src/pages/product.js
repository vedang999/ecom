// pages/product.js

import styles from '../styles/Product.module.scss';
// import image1 from '../pics/image1.png'; // adjust the path as necessary
// import image2 from '../pics/image2.png'; // adjust the path as necessary
// import image3 from '../pics/image3.png'; // adjust the path as necessary
// import image4 from '../pics/image4.png'; // adjust the path as necessary
import rel1 from '../pics/rel1.png'; // adjust the path as necessary
import rel2 from '../pics/rel2.png'; // adjust the path as necessary
import rel3 from '../pics/rel3.png'; // adjust the path as necessary
import rel4 from '../pics/rel4.png'; // adjust the path as necessary
import red1 from '../pics/red1.png'; // adjust the path as necessary
import download from '../pics/download.png'; // adjust the path as necessary
import share from '../pics/share.png'; // adjust the path as necessary
import policy from '../pics/policy.png'; // adjust the path as necessary
import tag from '../pics/tag.jpg'; // adjust the path as necessary
import Counter from './Counter';
import ImageGallery from './ImageGallery';

import SizeButtons from './SizeButtons'; // Adjust the path as needed
import ColorRadioButtons from './ColorRadioButtons'; // Adjust the path as needed
import BuyButton from './BuyButton';
import AddToCartButton from './Addtocart';
import DescriptionToggle from './desc';
import Info from './Info'
import RnQ from './RnQ'
import HeartButton from './HeartButton';
const Product = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow</p>
          <div>
            <select>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
        <nav className={styles.navbar}>
          <h1>Exclusive</h1>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div className={styles.searchCart}>
            <input type="text" placeholder="What are you looking for?" />
            <button>❤️</button>
            <button>🛒</button>
          </div>
        </nav>
        <hr></hr>
      </header>
      <main className={styles.main}>
        <div className={styles.product}>

          <div className={styles.imageGallery}>
            <div>Account /   Gaming /   Havic HV G-92 Gamepad</div>
        <ImageGallery />
          </div>
          <div className={styles.details}>
            <h2>Havic HV G-92 Gamepad</h2>
            <div className={styles.rating}>
              <span>⭐⭐⭐⭐⭐</span>
              <span>(150 Reviews)</span>
              <span className={styles.inStock}>In Stock</span>
            </div>
            <div className={styles.price}>
              <span className={styles.currentPrice}><strong>$159.00</strong></span>
              <span className={styles.originalPrice}>$179</span>
              <span className={styles.discount}>10% off</span>
            </div>
            <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            <div className={styles.options}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>Colours:  <ColorRadioButtons />
                </label>

              </div>
              <br/>
              <div style={{ paddingBottom: '10px' }}>
              <SizeButtons />
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.quantity}>
                <Counter/>
              </div >
              <div style={{ display: 'flex', paddingRight: '10px' }}>
                <div style={{ marginRight: '10px' }}>
                  <BuyButton />
                </div>
              <div>
                <AddToCartButton />
              </div>
            </div>
            <HeartButton/>
              {/* <button className={styles.addToCart}>❤️</button> */}
            </div>

            <div className={styles.delivery}>
              <img src={policy} alt="policy" style={{ height: '120px' }} />
            </div>
            <div className={styles.offers}>
              <div>
              <img src={tag} alt="Tag" style={{ height: '20px' }}/>
                <strong>Bank Offer </strong>10% Instant Discount upto $10 on XYZ Credit Card</div>
                <div>
              <img src={tag} alt="Tag" style={{ height: '20px' }}/>
                <strong>Bank Offer </strong>  5% Unlimited Cashback on XYZ Credit Card</div>
                <div>
              <img src={tag} alt="Tag" style={{ height: '20px' }}/>
                <strong>Bank Offer </strong>Additional $20 off on XYZ Credit Card
                </div>
                <div>
              <img src={tag} alt="Tag" style={{ height: '20px' }}/>
                <strong>Special Offer</strong> Additional $20 off on XYZ Credit Card TnC</div>
          <DescriptionToggle />
          <Info/>
            </div>
          </div>

        </div>
        <RnQ/>

        <div className={styles.relatedItems}>

          <h3>
        <img src={red1} alt="point" />

               Related Items</h3>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src={rel1} alt="Related Item 1" />

              <p>HAVIT HV-G92 Gamepad</p>
              <p>$120</p>
            </div>
            <div className={styles.item}>
            <img src={rel2} alt="Related Item 2" />
            <p>AK-900 Wired Keyboard</p>
              <p>$960</p>
            </div>
            <div className={styles.item}>
            <img src={rel3} alt="Related Item 3" />
              <p>IPS LCD Gaming Monitor</p>
              <p>$370</p>
            </div>
            <div className={styles.item}>
            <img src={rel4} alt="Related Item 4" />
              <p>RGB Liquid CPU Cooler</p>
              <p>$160</p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h4>Exclusive</h4>
            <ul>
              <li></li>
              <li>
            <p>Get 10% off your first order</p>

              <li>
            <p>Subscribe</p>
              </li>

            <input type="email" placeholder="Enter your email" />
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div>
            <h4>Account</h4>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <h4>Quick Link</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Download App</h4>
            <ul>
              <li>

              <img src={download} alt="App Store" style={{ height: '80px' ,width: "180px"}}/>
              </li>
              <li>

            <img src={share} alt="App Store" style={{ height: '20px' }}/>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Product;

