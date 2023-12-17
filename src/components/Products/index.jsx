import React from 'react'
import "./index.scss";
import SectionTitle from '../SectionTitle';
import ProductsCards from '../ProductsCards';
const Products = () => {
  return (
    <>
    <section id="products">
        <div className="products_container">
            <SectionTitle title="Explore Our Products" small="Our Products"/>
            <ProductsCards/>
        </div>
    </section>
    </>
  )
}

export default Products