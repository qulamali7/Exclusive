import React from 'react'
import "./index.scss";
const SectionTitle = ({ small, title}) => {
    return (
        <>
            <div className="sectioon_title_content">
                <div className="sectioon_title_content_left">
                    <div className="sectioon_title_content_left_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                            <rect width="20" height="40" rx="4" fill="#DB4444" />
                        </svg>
                        <p>{small}</p>
                    </div>
                    <div className="sectioon_title_content_left_bottom">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="sectioon_title_content_right">
                    <button>View All</button>
                </div>
            </div>
        </>
    )
}

export default SectionTitle