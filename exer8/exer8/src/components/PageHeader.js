import React from "react";
import LazLogo from "../images/lazada-logo.png"

export default function PageHeader({children}){
    let navMenus = children;
    return (
        <div className="pageHead">
            <div className="logo-name">
                <div className="lazlogo">
                    <img src={LazLogo} alt="Lazada Logo"/>
                </div>
                <h1>Lazado</h1>
            </div>
            <ol className="navMenu">
                    {
                        navMenus.map((menu) => {
                            return <li key={menu.id}>{menu.name}</li>
                        })
                    }
            </ol>
        </div>
    );
}