import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { GoMailRead } from "react-icons/go";

const UsersPage = ({ user }) => {
  const {
    email,
    phone,
    registered: { age, date },
    name: { title, first, last },
    picture: { medium },
    location: { country, state },
  } = user;
  return (
    <main className="user-container">
      <div className="main-header description-row">
        <img src={medium} alt="user-photo" />
        <h1>
          {title} {first} {last}
        </h1>
      </div>
      <div className="description">
        <div className="description-row">
          <GoMailRead />
          <p>{email}</p>
        </div>
        <div className="description-row">
          <TbPhoneCall />
          <p>{phone}</p>
        </div>
        <div className="description-row">
          <GrMapLocation />
          <p>
            {state} -{country}
          </p>
        </div>
      </div>
      <div className="age-date">
        <p>Age: {age}</p>
        <p>Register Date: {date}</p>
      </div>
    </main>
  );
};

export default UsersPage;
