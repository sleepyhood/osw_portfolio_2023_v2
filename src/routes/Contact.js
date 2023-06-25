import React from "react";
// import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  // 2023-06-23 기준 일시 정지
  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_r96py39",
  //       "template_pwf0awb",
  //       e.target,
  //       "user_2r8nBTHaNah0VK2Zfo0MK"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Email📧 sends sucess!");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <div className="contact">
      <div className="container contact" style={{ backgroundColor: "#171717" }}>
        <div className="form contact" style={{ fontSize: "60px" }}>
          Contact
          <div className="introduce">
            <form className="contact-form">
              {/* <form className="contact-form" onSubmit={sendEmail}> */}{" "}
              <input type="hidden" name="contact_number" />
              <div>
                <label>Name</label>{" "}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your Name"
                />{" "}
              </div>
              <div>
                <label>*Email</label>{" "}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <label>*Message</label>{" "}
                <textarea
                  name="message"
                  placeholder="Enter your Message"
                  required
                />{" "}
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
