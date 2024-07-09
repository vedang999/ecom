import "./Relate1.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Related2 from "./Related2";
import { productData, responsive } from "./data";

export default function Related1() {
  const product = productData.map((item) => (
    <Related2
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
