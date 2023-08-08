import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function ProfileIcon({ onRouteChange }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggle = () => setDropDownOpen((prevState) => !prevState);

  return (
    <div className="pa4 tc">
      <Dropdown isOpen={dropDownOpen} toggle={toggle}>
        <DropdownToggle data-toggle="dropdown" tag="span">
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-cute-yellow-duck_602089-155.jpg"
            className="br-100 ba h3 w3 dib"
            alt="avatar"
          />
        </DropdownToggle>
        <DropdownMenu
          className="b--transparent shadow-5"
          style={{
            marginTop: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <DropdownItem>View Profile</DropdownItem>
          <DropdownItem onClick={() => onRouteChange('signout')}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default ProfileIcon;
