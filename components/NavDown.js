export default function NavBar () {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-ligth">
                <a href="#" className="navbar-brand"><img src="../img/logo.png"></img>Navbar</a>
                <button
                className="navbar-toggler"
                type="button"
                data-ds-toggle='collapse'
                data-bs-target="toggleMobileMenu"
                aria-label="Toggle navigation"
                ><span className="navbar-toggler-icon"></span></button>

                <div className="navbar-collapse collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav">
                        <li>
                            <a className="nav-link" href="./shop">shop</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}