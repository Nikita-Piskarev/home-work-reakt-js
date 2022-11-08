import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
//создал обьект карандаша с описанием
const product = {
  name: "pensel",
  description:
    "wooden pencil with graphite lead, yellow, with a grout at the end",
  price: 15,
  amount: 2,
};
// диструризовал его
const { name, description, price, amount } = product;
// создал компонент товара через функцию
function StoreGoods(props) {
  const { name, value } = props;

  return (
    <p>
      {name} {value}
    </p>
  );
}

// создал компонент товара через класс
class StoreGoods1 extends React.Component {
  render() {
    const { name, value } = this.props;

    return (
      <p>
        {name} {value}
      </p>
    );
  }
}

// вывел на экран сразу 2 компонента функции и классовб установиил заглушки на пропсы, а так же указал о наличии товара на складе;
root.render(
  <div>
    <StoreGoods1 name="Name - " value={name ? name : "not specified"} />

    <StoreGoods1
      name="Description - "
      value={description ? description : "not specified"}
    />

    <StoreGoods1 name="Price - " value={price ? price : "not specified"} />

    <StoreGoods1 name="Amount - " value={amount ? "in stock" : "not stock"} />

    <StoreGoods name="Name - " value={name ? name : "not specified"} />

    <StoreGoods
      name="Description - "
      value={description ? description : "not specified"}
    />

    <StoreGoods name="Price - " value={price ? price : "not specified"} />

    <StoreGoods name="Amount - " value={amount ? "in stock" : "not stock"} />
  </div>
);
// не знаю пока куда отдельно можно положить файлы по этому сделал все сдесь

reportWebVitals();
