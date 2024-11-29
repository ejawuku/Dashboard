import Link from "next/link";

export default function RegisterForm() {
  return (
    <div
      className="flex flex-col items-center justify-evenly h-screen mx-auto border mt-36"
      style={{ height: "581px", width: "520px" }}
    >
      <h1 className="">Create your Account</h1>
      <div>
        <div>
          <span>Name</span>
          <input type="text" placeholder="Eg. John Doe" />
        </div>
        <div>
          <span>Company Name</span>
          <input type="text" placeholder="Eg. PaySwitch Company Limited" />
        </div>
        <div>
          <span>Email</span>
          <input type="email" placeholder="Eg. youremail@domain.com" />
        </div>
        <div>
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree">
            I agree to all <Link href="#">Terms and Conditions</Link> and{" "}
            <Link href="#">Privacy Policy</Link>
          </label>
        </div>
      </div>
      <button>
        <span>Register</span>
      </button>
      <div>
        <span>Already have an account?</span>{" "}
        <Link href="#" className="text-blue-600 underline font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
}
