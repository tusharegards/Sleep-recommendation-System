import React from 'react'

import {Link} from 'react-router-dom'

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  
} from 'reactstrap'
const auth = () => {
   
    return (
    <>     
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="default"
          data-toggle="dropdown"
          href="#pablo"
          nav
          onClick={(e) => e.preventDefault()}
          role="button"
        >
          <i
            aria-hidden={true}
            className="fa fa-user-circle-o "
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-success" right>
          <DropdownItem header tag="span">
            welcome user
          </DropdownItem>
           <DropdownItem
            tag={Link} to={`/login`}
          >
            LOGIN
          </DropdownItem>

          
          <DropdownItem
            
            tag={Link} to={`/register`}
          >
            SIGN-UP
          </DropdownItem>
          

          <DropdownItem
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Contact Us
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            LOGOUT
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
          


    </>
    )
}

export default auth

