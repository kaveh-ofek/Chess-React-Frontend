import classes from "./HeaderStyling.module.css";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/aboutme'>About Me</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;