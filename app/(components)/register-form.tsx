"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [isValidated, setIsValidated] = useState(true);
  return (
    <div
      className="flex flex-col items-center justify-evenly h-screen mx-auto mt-36"
      style={{ height: "581px", width: "520px" }}
    >
      <h1 className="text-3xl font-bold">Create your Account</h1>
      <div className="w-4/5">
        <div className="flex flex-col">
          <span className="text-xs mb-1 font-semibold">Name</span>
          <input
            type="text"
            placeholder="Eg. John Doe"
            className="border-2 border-gray-200 flex items-center px-2 h-12 mb-5 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs mb-1 font-semibold">Company Name</span>
          <input
            type="text"
            placeholder="Eg. PaySwitch Company Limited"
            className="border-2 border-gray-200 flex items-center px-2 h-12 mb-5 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs mb-1 font-semibold">Email</span>
          <input
            type="email"
            placeholder="Eg. youremail@domain.com"
            className="border-2 border-gray-200 flex items-center px-2 h-12 mb-5 placeholder:text-sm"
          />
        </div>
        <div className="flex items-center px-5">
          <input type="checkbox" name="agree" id="agree" className="mr-4" />
          <label htmlFor="agree" className="font-semibold text-sm">
            I agree to all <Link href="#">Terms and Conditions</Link> and
            <Link href="#">Privacy Policy</Link>
          </label>
        </div>
      </div>
      <button
        className={`bg-gray-200 w-4/5 h-12 ${
          isValidated && "bg-blue-600 text-white"
        }`}
      >
        <span>Register</span>
      </button>
      <div>
        <span>Already have an account?</span>
        <Link
          href="/auth/login"
          className="text-blue-600 underline font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
