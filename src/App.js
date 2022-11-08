import logo from "./logo.svg";
import "./App.css";
import ProductPen from "./components/ProductPen";
import ProductPensel from "./components/ProductPensel";

const pensel = {
  name: "Pensel",
  description:
    "Wooden pencil with graphite lead, yellow, with a grout at the end",
  price: 15,
  amount: 2,
};

const pen = {
  name: "Pen",
  description:
    "Blue automatic handle",
  price: 23,
  amount: 0,
};

function App() {
  return (
    <>
      <ProductPensel
        name={pensel.name}
        description={pensel.description}
        price={pensel.price}
        amount={pensel.amount}
      />
      <ProductPen
        name={pen.name}
        description={pen.description}
        price={pen.price}
        amount={pen.amount}
      />
    </>
  );
}

export default App;
