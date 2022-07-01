import React from "react";
import "./Card.scss";
import phone from "../assets/phone.svg";
import location from "../assets/email.svg";
import emails from "../assets/email.svg";

const Card = ({ user }) => {
  const {
    picture: { medium },
    name: { title, first, last },
    email,
    cell,
    location: { city, country },
    dob: { age },
    registered: { date },
  } = user;

  return (
    <div className="content">
      <div className="image">
        <img src={medium} alt="" />
      </div>
      <h3>
        {title} {first}
        {last}
      </h3>
      <div className="svg">
        <img src={emails} alt="" />
      </div>
      <h4>{email}</h4>
      <div className="svg">
        <img src={phone} alt="" />
      </div>
      <h4>{cell}</h4>
      <div className="svg">
        <img src={location} alt="" />
      </div>
      <h4>
        {country}
        {city}
      </h4>
      <h4 className="age">Age:{age}</h4>
      <h4 className="regdate">Register Date: {date.substring(0,10)}</h4>
    </div>
  );
};

export default Card;
