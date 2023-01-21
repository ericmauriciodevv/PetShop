import React from "react";
import Link from "next/link";
import LogIn from "../components/LogIn";

const NavBar = () => {
    return(
        <div className="bg-light mb-4">
            <nav className="container navbar navbar-expand-md navbar-ligth position-relative">
                <a href="./" className="navbar-brand"><img src="../img/Logo.png" width='30' height='30'></img>PetShop</a>
                <button
                className="navbar-toggler"
                type="button"
                data-ds-toggle='collapse'
                data-bs-target="toggleMobileMenu"
                aria-label="Toggle navigation"
                ><span className="navbar-toggler-icon"></span></button>

                <div className=" navbar-collapse collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" href='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link className="nav-link" href='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link className="nav-link" href='/shop'>Shop</Link>
                        </li>
                    </ul>
                    
                </div>
                <LogIn ></LogIn>
            </nav>
        </div>
    )
}

export default NavBar