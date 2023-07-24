"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const updates = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  let list = 1;

  const [show, setShow] = useState("hidden");
  const [border, setBorder] = useState("");
  const [thank, setThank] = useState("hidden");
  const [form, setForm] = useState("");

  const input = document.querySelector("#email");
  let email = "";

  function checkEmail(event) {
    event.preventDefault();
    if (isValidEmail(event.target.value)) {
    } else {
      setThank("");
      setForm("hidden");
      return (email = event.target.value);
    }
  }

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    return regex.test(email);
  }

  function handleChange(event) {
    if (isValidEmail(event.target.value)) {
      setShow("hidden");
      setBorder("");
    } else if (event.target.value === "") {
      setShow("hidden");
      setBorder("");
    } else {
      setShow("");
      setBorder("invalid:border-[#FF6257]");
    }
  }

  return (
    <section>
      <div className={`newsletter bg-white p-5 flex ${form}`}>
        <div className="textContainer m-5 p-5 max-w-md flex flex-col justify-center">
          <h1 className="heroTitle text-5xl font-extrabold my-5">
            Stay updated!
          </h1>
          <p className="">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="my-3">
            {updates.map((items) => (
              <li key={items} className="flex my-3">
                <Image
                  src="/icon-list.svg"
                  alt="List Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                  style={{ width: "auto", height: "auto" }}
                />
                {items}
              </li>
            ))}
          </ul>
          <form className="flex flex-col mt-2" onSubmit={checkEmail}>
            <p className="flex justify-between">
              <label className="label text-xs font-bold">Email address</label>
              <span
                className={`labelValid text-xs font-bold text-[#FF6257] peer-invalid:block ${show}`}
              >
                Valid email required
              </span>
            </p>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className={`input p-4 rounded-lg mb-5 mt-2 peer ${border}`}
              placeholder="email@company.com"
              required
            />

            <button
              type="submit"
              className="buttonSubmit p-4 text-white rounded-lg hover:shadow hover:shadow-[0_20px_25px_-5px_rgba(255,103,62,0.3)]"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="imageContainer flex justify-center items-center">
          <Image
            src="/illustration-sign-up-desktop.svg"
            alt="List Icon"
            width="0"
            height="0"
            priority
            style={{ width: "100%", height: "auto" }}
            className="desktop-image"
          />
          <Image
            src="/illustration-sign-up-mobile.svg"
            alt="List Icon"
            width="0"
            height="0"
            priority
            style={{ width: "100%", height: "auto" }}
            className="mobile-image"
          />
        </div>
      </div>
      <div className={`thanks p-10 max-w-md bg-white flex ${thank}`}>
        <div className="m-5 flex flex-col gap-6 justify-center">
          <Image
            src="/icon-list.svg"
            alt="List Icon"
            width={50}
            height={50}
            className="mr-2"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="heroTitle text-5xl font-extrabold">
            Thanks for subscribing!
          </h1>
          <p className="">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button className="buttonSubmit p-4 text-white rounded-lg hover:shadow hover:shadow-[0_20px_25px_-5px_rgba(255,103,62,0.3)] justify-self-end">
            Dismiss message
          </button>
        </div>
      </div>
    </section>
  );
}
