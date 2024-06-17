"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch("api/sendEmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      // Email sent successfully
      const data = await response.json(); // Parse JSON only if successful
      console.log("Email sent successfully:", data);
      // You can optionally reset the form here
      setName("");
      setEmail("");
      setMessage("");
    } else {
      // Handle error response
      console.error("Error sending email:", response.status);
      // Display an error message to the user
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <form onSubmit={sendMail} className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Nombre"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea
          name="message"
          id="message"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Escribe tu mensaje aquí."
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        className="flex items-center  gap-x-1 max-w-[166px]">
        Hablemos
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
