import React from "react";
import TopTotal from "./TopTotal";
import SaleStatistics from "./SaleStatistics";
import ProductsStatistics from "./ProductsStatistics";

const TestHome = () => {
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h4 className="content-title"> Dashboard </h4>
        </div>
        {/* Top Total */}
        <TopTotal />

        <div className="row">
          {/* STATICS */}
          <ProductsStatistics />
          {/* <SaleStatistics /> */}
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm"></div>
      </section>
    </>
  );
};

export default TestHome;
