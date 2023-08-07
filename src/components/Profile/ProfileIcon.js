import { useState } from 'react';

function ProfileIcon() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div class="pa4 tc">
      <img
        src="https://img.freepik.com/premium-vector/vector-illustration-cute-yellow-duck_602089-155.jpg"
        class="br-100 ba h3 w3 dib"
        alt="avatar"
      />
    </div>
  );
}

export default ProfileIcon;
