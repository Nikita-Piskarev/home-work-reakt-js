function ProductPensel(props) {
    const { name, description, price, amount } = props;
  
    return (
      <>
        <h2>Name - {name || 'not defend'}</h2>
        <p>Description - {description || 'not defend'}</p>
        <p>price - {price || 'not defend'}</p>
        <p>amount - {amount? 'in stock': 'not stock'}</p>
      </>
    );
  }

  export default  ProductPensel;