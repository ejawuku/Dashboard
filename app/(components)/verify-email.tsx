import Link from "next/link";

export default function VerifyEmail() {
  return (
    <div className="flex flex-col items-center justify-evenly mx-auto h-56 w-1/3 mt-64 text-center">
      <span className="text-3xl font-bold">Verify your Email</span>
      <span className="font-semibold">
        We’ve sent a verification link to your email. Kindly go to your email to
        complete verification.
      </span>
      <Link href={""} className="underline text-blue-600">
        Resend Email
      </Link>
    </div>
  );
}
