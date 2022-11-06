import React from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/model" activeStyle>
			Model
		</NavLink>
		<NavLink to="/payment" activeStyle>
			Payment
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
