import rel1 from '../pics/rel1.png'; // adjust the path as necessary
import rel2 from '../pics/rel2.png'; // adjust the path as necessary
import rel3 from '../pics/rel3.png'; // adjust the path as necessary
import rel4 from '../pics/rel4.png'; // adjust the path as necessary
export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:
rel1,      name: "Colorful sneakers",
      price: "$19.99",
      description: "Some text about the product..",
    },
    {
      id: 2,
      imageurl:
rel2,      name: "Sport sneakers",
      price: "$21.99",
      description: "Some text about the product..",
    },
    {
      id: 3,
      imageurl:
rel3,      name: "iWatch",
      price: "$99.99",
      description: "Some text about the product..",
    },
    {
      id: 4,
      imageurl:
rel4,      name: "Water Bottle",
      price: "$14.99",
      description: "Some text about the product..",
    },
    {
      id: 5,
      imageurl:
rel1,      name: "Vans sneakers",
      price: "$38.99",
      description: "Some text about the product..",
    },
    {
      id: 6,
      imageurl:
rel2,      name: "Coco Noir",
      price: "$149.99",
      description: "Some text about the product..",
    },
    {
      id: 7,
      imageurl:
rel3,      name: "Sunglasses",
      price: "$38.99",
      description: "Some text about the product..",
    },
    {
      id: 8,
      imageurl:
rel4,      name: "Dove cream",
      price: "$49.99",
      description: "Some text about the product..",
    },
  ];