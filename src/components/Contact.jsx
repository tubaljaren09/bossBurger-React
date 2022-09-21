import React from "react";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <h1>
          <span>Leave</span> us a message
        </h1>
        <form>
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <br />
          <input type="submit" name="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
