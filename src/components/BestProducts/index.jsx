import React from 'react'
import "./index.scss";
import SectionTitle from '../SectionTitle'
import BestProductCards from '../BestProductCards'

const BestProducts = () => {
  return (
    <>
    <section id="bestProduct">
        <div className="best_products_container">
            <SectionTitle title="Best Selling Products" small="This Month" button="View All"/>
            <BestProductCards/>
        </div>
    </section>
    </>
  )
}

export default BestProducts