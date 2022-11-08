import { Component } from "react";
class ProductPen extends Component {
  render() {
    const { name, description, price, amount } = this.props;

    return (
      <>
        <h2>Name - {name || 'not defend'}</h2>
        <p>Description - {description || 'not defend'}</p>
        <p>price - {price || 'not defend'}</p>
        <p>amount - {amount? 'in stock': 'not stock'}</p>
      </>
    );
  }
}
export default ProductPen;
