import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texst">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellendus inventore, vel, qui aut quidem quos quod modi cupiditate
          voluptas perferendis magni eos
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
