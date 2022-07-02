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
      <div>
        <img src={medium} alt="user-photo" />
        <h1>
          {title} {first} {last}
        </h1>
      </div>
      <div className="description">
        <div>
          <GoMailRead />
          <p>{email}</p>
        </div>
        <div>
          <TbPhoneCall />
          <p>{phone}</p>
        </div>
        <div>
          <GrMapLocation />
          <p>
            {state} -{country}
          </p>
        </div>
      </div>
      <div>
        <p>Age: {age}</p>
        <p>Register Date: {date}</p>
      </div>
    </main>
  );
};

export default UsersPage;
