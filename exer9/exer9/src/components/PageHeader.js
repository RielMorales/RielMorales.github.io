import React from "react";
import LazLogo from "../images/lazada-logo.png"
import NavMenu from "./NavMenu";

export default function PageHeader(props){
    let navMenus = props.data;
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
                            // return <li key={menu.id} onClick={() => {console.log("Pressed "+menu.name)}}><a href={menu.url}>{menu.name}</a></li>
                            return <NavMenu data={menu} key={menu.id} />
                        })
                    }
            </ol>
        </div>
    );
}