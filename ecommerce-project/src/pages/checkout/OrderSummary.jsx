import dayjs from "dayjs";
import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

function CartItemRow({ cartItem, deliveryOptions, loadCart }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editQuantity, setEditQuantity] = useState(cartItem.quantity);

  const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId;
  });

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const startEditing = () => {
    setEditQuantity(cartItem.quantity);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setEditQuantity(cartItem.quantity);
    setIsEditing(false);
  };

  const saveQuantity = async () => {
    if (!editQuantity || editQuantity < 1) {
      alert("Please enter a valid quantity");
      return;
    }

    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: editQuantity,
    });

    await loadCart();
    setIsEditing(false);
  };

  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Delivery date:{" "}
        {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
          "dddd, MMMM, D"
        )}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            {isEditing ? (
              <span>
                Quantity:{" "}
                <input
                  type="number"
                  min="1"
                  className="quantity-input"
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(Number(e.target.value))}
                />
                <span
                  className="update-quantity-link link-primary"
                  onClick={saveQuantity}
                >
                  Save
                </span>
                <span
                  className="delete-quantity-link link-primary"
                  onClick={cancelEditing}
                >
                  Cancel
                </span>
              </span>
            ) : (
              <span>
                Quantity:{" "}
                <span className="quantity-label">{cartItem.quantity}</span>
                <span
                  className="update-quantity-link link-primary"
                  onClick={startEditing}
                >
                  Update
                </span>
                <span
                  className="delete-quantity-link link-primary"
                  onClick={deleteCartItem}
                >
                  Delete
                </span>
              </span>
            )}
          </div>
        </div>

        <DeliveryOptions
          cartItem={cartItem}
          deliveryOptions={deliveryOptions}
          loadCart={loadCart}
        />
      </div>
    </div>
  );
}

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => (
          <CartItemRow
            key={cartItem.productId}
            cartItem={cartItem}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
        ))}
    </div>
  );
}
