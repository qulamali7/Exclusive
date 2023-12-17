import React from 'react'
import "./index.scss";
import CategoryCards from '../CategoryCards';
import SectionTitle from '../SectionTitle';
const Category = () => {
    return (
        <>
            <section id="category">
                <div className="category_container">
                    <SectionTitle title="Browse By Category" small="Categories" />
                    <CategoryCards />
                </div>
            </section>
        </>
    )
}

export default Category