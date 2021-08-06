import React from "react";
import { Link } from "react-router-dom";

import { NavItem, NavLink } from "reactstrap";

const NavbarItems = (props) => {
 
  return (
    <>
      <NavItem>
        <NavLink
          tag={Link}
          to={`/`}
          data-placement="bottom"
          title="go to homePage"
        >
          <i className="fa fa-home" />
          <p className="d-lg-none">Home</p>
        </NavLink>
      </NavItem>
      
      <NavItem>
          <NavLink
            data-placement="bottom"
            tag={Link}
            to="/Statistics"
            title="Have a look at your record"
          >
            <i className="fa fa-area-chart" />
            <p className="d-lg-none">Statistics</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            data-placement="bottom"
            tag={Link}
            to="/recommendation"
            title="see you recommendations"
          >
            <i className="fa fa-shower" />
            <p className="d-lg-none">Advice</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            data-placement="bottom"
            tag={Link}
            to="/QuickUpdate"
            title="quick update record"
          >
            <i className="fa fa-fighter-jet" />
            <p className="d-lg-none">QuickUpdate</p>
          </NavLink>
        </NavItem>

      <NavItem>
        <NavLink
          data-placement="bottom"
          tag={Link}
          to="/api"
          title="Connect to our API"
        >
          <i className="fa fa-code" />
          <p className="d-lg-none">ConnectAPI</p>
        </NavLink>
      </NavItem>
    </>
  );
};

export default NavbarItems;
