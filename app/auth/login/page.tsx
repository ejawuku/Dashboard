"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isValidated, setIsValidated] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-evenly h-screen mx-auto mt-36"
      style={{ height: "581px", width: "520px" }}
    >
      <h1 className="text-3xl font-bold">Login to your Account</h1>
      <div className="w-4/5">
        <div className="flex flex-col">
          <span className="text-xs mb-1 font-semibold">Email</span>
          <input
            type="email"
            placeholder="youremail@domain.com"
            className="border-2 border-gray-200 flex items-center px-2 h-12 mb-5 placeholder:text-sm outline-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs mb-1 font-semibold">Password</span>
          <div className="border-2 border-gray-200 flex items-center px-2 h-12 mb-5 justify-between">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="****************"
              className="outline-none placeholder:text-sm w-4/5"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {!showPassword && (
                <Image
                  src={"/icons/eye-slash-svgrepo-com.svg"}
                  alt="eye"
                  width={20}
                  height={20}
                />
              )}
              {showPassword && (
                <Image
                  src={"/icons/eye-svgrepo-com.svg"}
                  alt="eye"
                  width={20}
                  height={20}
                />
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center px-5">
          <input type="checkbox" name="agree" id="agree" className="mr-4" />
          <label htmlFor="agree" className="font-semibold text-sm">
            I agree to all <Link href="#">Terms and Conditions</Link> and
            <Link href="#">Privacy Policy</Link>
          </label>
        </div>
      </div>
      <button className={` w-4/5 h-12 bg-blue-600 text-white`}>
        <span>Login</span>
      </button>
      <div>
        <span>Dont have an account?</span>
        <Link
          href="/auth/register"
          className="text-blue-600 underline font-semibold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
