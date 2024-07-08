// src/components/ProductDetails.js
import React from 'react';
import styled from 'styled-components';

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .image-section {
    flex: 1;
    img {
      width: 100%;
    }
    .thumbnails {
      display: flex;
      margin-top: 10px;
      img {
        width: 100px;
        margin-right: 10px;
      }
    }
  }

  .details-section {
    flex: 2;
    padding: 20px;

    .product-name {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .rating-and-stock {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .rating {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }

      .stock {
        color: green;
      }
    }

    .price {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .current-price {
        font-size: 24px;
        margin-right: 10px;
      }
      .original-price {
        text-decoration: line-through;
        margin-right: 10px;
      }
      .discount {
        color: red;
      }
    }

    .options {
      margin-bottom: 20px;
      .colors, .sizes {
        margin-bottom: 10px;
        span {
          margin-right: 10px;
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .quantity {
        display: flex;
        align-items: center;
        margin-right: 20px;
        button {
          width: 30px;
          height: 30px;
        }
        span {
          margin: 0 10px;
        }
      }
      .buy-now, .add-to-cart {
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }
      .buy-now {
        background: red;
        color: white;
        margin-right: 10px;
      }
      .add-to-cart {
        background: #eee;
      }
    }

    .delivery-info, .offers {
      margin-bottom: 20px;
    }

    .description, .additional-info {
      margin-bottom: 20px;
      button {
        margin-right: 10px;
        border: none;
        background: none;
        cursor: pointer;
      }
    }
  }
`;

const ProductDetails = () => {
  return (
    <ProductDetailsWrapper>
      <div className="image-section">
        <img src="/product-image.jpg" alt="Product" />
        <div className="thumbnails">
          <img src="/thumbnail1.jpg" alt="Thumbnail 1" />
          <img src="/thumbnail2.jpg" alt="Thumbnail 2" />
          <img src="/thumbnail3.jpg" alt="Thumbnail 3" />
        </div>
      </div>
      <div className="details-section">
        <h2 className="product-name">Havic HV G-92 Gamepad</h2>
        <div className="rating-and-stock">
          <div className="rating">
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span>(150 Reviews)</span>
          </div>
          <span className="stock">In Stock</span>
        </div>
        <div className="price">
          <span className="current-price">$159.00</span>
          <span className="original-price">$179.00</span>
          <span className="discount">10% off</span>
        </div>
        <div className="options">
          <div className="colors">
            <span>Colours:</span>
            <span>Red</span>
            <span>Blue</span>
          </div>
          <div className="sizes">
            <span>Size:</span>
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
        </div>
        <div className="actions">
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="delivery-info">
          <p>Free Delivery</p>
          <p>Return Delivery</p>
        </div>
        <div className="offers">
          <p>Bank Offer: 10% Instant Discount up to $10 on XYZ Credit Card</p>
          <p>Bank Offer: 5% Unlimited Cashback on XYZ Credit Card</p>
          <p>Bank Offer: Additional $20 off on XYZ Credit Card</p>
          <p>Special Offer: Additional $20 off on XYZ Credit Card TnC</p>
        </div>
        <div className="description">
          <button>Description</button>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
        </div>
        <div className="additional-info">
          <button>Additional Information</button>
          <p>
            SIZE: 13 UK MATERIAL: Cotton COMPANY OF ORIGIN: India PlayStation 5
            Controller Skin High quality vinyl with air channel adhesive for
            easy bubble free install & mess free removal.
          </p>
        </div>
      </div>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
