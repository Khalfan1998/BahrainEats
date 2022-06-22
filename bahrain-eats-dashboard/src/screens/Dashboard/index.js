import React from "react";
import TopTotal from "./TopTotal";

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
          {/* STATICS
          <SaleStatistics />
          <ProductsStatistics /> */}
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm"></div>
      </section>
    </>
  );
};

export default TestHome;
