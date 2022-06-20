import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texst">
        <h1 className="pl-title">My Creations</h1>
        <p className="pl-desc">
          Here we have links to my projects including final project for Code
          Space Academy
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
