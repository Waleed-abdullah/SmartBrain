import { useState } from 'react';
import './Profile.css';
function Profile({ toggleModal, user, loadUser }) {
  const [userData, setUserData] = useState({
    name: user.name,
    age: user.age,
    pet: user.pet,
  });

  function onFormChange(event) {
    switch (event.target.name) {
      case 'user-name':
        setUserData({ ...userData, name: event.target.value });
        break;
      case 'user-age':
        setUserData({ ...userData, age: event.target.value });
        break;
      case 'user-pet':
        setUserData({ ...userData, pet: event.target.value });
        break;
      default:
        return;
    }
  }

  function onProfileUpdate() {
    fetch(`http://localhost:3000/profile/${user.id}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formInput: { ...userData, id: user.id } }),
    }).then((resp) => {
      toggleModal();
      loadUser({ ...user, ...userData });
    });
  }

  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-cute-yellow-duck_602089-155.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>{userData.name}</h1>
          <h4>{`Images Submitted: ${user.entries}`}</h4>
          <p>{`Member Since: ${new Date(user.joined).toLocaleDateString()}`}</p>
          <hr />
          <label className="mt2 fw6" htmlFor="user-name">
            Name:
          </label>
          <input
            onChange={onFormChange}
            className="pa2 ba w-100"
            type="text"
            name="user-name"
            id="user-name"
            placeholder={user.name}
          />
          <label className="mt2 fw6" htmlFor="user-age">
            Name:
          </label>
          <input
            onChange={onFormChange}
            className="pa2 ba w-100"
            type="text"
            name="user-age"
            id="user-age"
            placeholder={user.age}
          />
          <label className="mt2 fw6" htmlFor="user-pet">
            Name:
          </label>
          <input
            onChange={onFormChange}
            className="pa2 ba w-100"
            type="text"
            name="user-pet"
            id="user-pet"
            placeholder={user.pet}
          />
          <div
            className="mt4"
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
              onClick={onProfileUpdate}
            >
              Save
            </button>
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
}

export default Profile;
