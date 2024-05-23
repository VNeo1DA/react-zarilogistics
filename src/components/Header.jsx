import { NavLink } from "react-router-dom";
function Header(){
    return(
        <div className="header">
            <header>
                <nav>
                <h1>Zarilogistics</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="other">Other Services</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
                </nav>
            </header>
        </div>
    )
}
export default Header;