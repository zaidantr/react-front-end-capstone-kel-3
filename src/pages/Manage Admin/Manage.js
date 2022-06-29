import { useState } from "react";
import "../../App.css";
import FormInput from "./FormInput";

export default function Manage() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name Admin",
      type: "text",
      placeholder: "Enter Your Name",
      errorMessage: "Please enter a valid name",
      label: "Name Admin",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Username",
      type: "text",
      placeholder: "Enter Your Username",
      errorMessage: "Please enter a valid username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please enter a valid password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "@gmail.com",
      errorMessage: "Please enter a valid email",
      label: "Email",
      required: true,
    },
    // {
    //   id: 5,
    //   name: "birthday",
    //   type: "date",
    //   placeholder: "Birthday",
    //   label: "Birthday",
    // },
    
    {
      id: 6,
      name: "Phone Number",
    //   type:"number",
      placeholder: "Phone Number",
      errorMessage: "Please enter a valid phone number",
      label: "Phone Number",
      pattern: `\+?([ -]?\d+)+|\(\d+\)([ -]\d+)`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        
      </form>
    </div>
  );
};
