import React from "react";
import Alert from "./alert";
import "../styles/page-wrapper.css";

const PageWrapper = props => {
    return (
        <div className = "page-wrapper-container">
            <main className='page-content'>
                <div className='container-fluid'>
                    <Alert/>
                    {props.children}
                </div>
            </main>
        </div>
    );
};

export default PageWrapper;