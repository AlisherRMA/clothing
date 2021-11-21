import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { getCartItemsQuantity } from "../../redux/cart/cart.utils";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, count }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{count}</span>
  </div>
);

const mapStateToProps = (state) => ({
  count: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
