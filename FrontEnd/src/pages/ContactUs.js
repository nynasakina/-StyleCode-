// import React, { useState } from "react";

// import { send } from "emailjs-com";

// const ContactUs = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const Validate = () => {
//     if (!name.length) {
//       //if no input,
//       setErrors((prevState) => {
//         //prevState {}
//         prevState.name = "Name is Required"; //the error msg for missing Name
//         return { ...prevState }; //updated prevState with the KeyValue pair above
//       });
//     }
//     if (!email.length) {
//       setErrors((prevState) => {
//         prevState.email = "Email is required";
//         return { ...prevState };
//       });
//     }
//     if (!message.length) {
//       setErrors((prevState) => {
//         prevState.message = "Message is Required";
//         return { ...prevState };
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Validate();
//     send(
//       "service_x74anac",
//       "template_6bnn9ao",
//       { name, email, message },
//       "ygdlunx0-E9ikUeJm"
//     )
//       .then((response) => {
//         console.log("Message sent", response.status, response.text);
//       })
//       .catch((err) => {
//         console.log("Failed", err);
//       });
//     // sendEmail();
//     console.log("Submit info");

//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Say Hi</h1>
//         <p>Have a question? Please send your enquiries below.</p>
//       </div>

//       <form>
//         <div className="form">
//           <label name="Name" />
//           <input className="input" value={name} onChange={handleNameChange} />
//           <div className="errorMsg">{errors.name}</div>

//           <label name="Email" />
//           <input
//             className="input"
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <div className="errorMsg">{errors.email}</div>

//           <label name="Message" />
//           <input
//             className="input"
//             value={message}
//             onChange={handleMessageChange}
//           />
//           <div className="errorMsg">{errors.message}</div>

//           <button className="submitBtn" onClick={handleSubmit} />
//         </div>
//       </form>
//     </>
//   );
// };

// export default ContactUs;