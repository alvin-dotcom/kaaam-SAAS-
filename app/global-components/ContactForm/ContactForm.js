import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function ContactForm() {
  // State variables to hold form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function handlesubmit(e) {
	e.preventDefault();
	const response = await fetch("https://api.web3forms.com/submit", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			access_key: "2dd2f554-ee1a-4e3d-9c36-f568c5e6611b",
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value,
		}),
	});
	const result = await response.json();
	if (result.success) {
		console.log(result);
	}

  // Function to handle form submission
  const formHandler = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending data to a server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clearing the form after submission
    setName("");
    setEmail("");
    setMessage("");
  }
  };

  return (
    <form className="mt-6 w-full max-w-[35rem] xl:max-w-xl" onSubmit={handlesubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="name">
            Your Name
          </label>
          <input
            className="block w-full bg-transparent rounded-md border-[1px] shadow-none p-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
            Your Email
          </label>
          <input
            className="block w-full bg-transparent rounded-md border-[1px] p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="message">
          Your message
        </label>
        <textarea
          className="block w-full bg-transparent rounded-md border-[1px] p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs resize-none"
          id="message"
          rows="8"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex mt-3 lg:justify-end">
        <ButtonPrimary type="submit">Send it</ButtonPrimary>
      </div>
    </form>
  );
}
