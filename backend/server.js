var express = require("express");

// import data from "./data.js";
const data = {
  products: [
    {
      name: "Nike Slim Shirt",
      slug: "nike slim shirt",
      category: "SHirts",
      image: "/images/1.png", // 679 x 829
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Nike Slim Shirt",
      slug: "nike shirt",
      category: "SHirts",
      image: "/images/2.png",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Nike Slim Shirt",
      slug: "nike slim",
      category: "SHirts",
      image: "/images/3.png",
      price: 100,
      countInStock: 8,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Puma Slim Pants",
      slug: "Puma slim Pants",
      category: "Pants",
      image: "/images/4.png",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
  ],
};

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
