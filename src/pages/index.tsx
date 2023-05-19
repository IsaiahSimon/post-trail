import { SignedIn, SignedOut } from "@clerk/nextjs";
import { type NextPage } from "next";
import Link from "next/link";
import Layout from "~/components/Layout";
import { useState } from "react";

const Home: NextPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackingNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic here to submit the tracking number to the backend
  };

  return (
    <>
      <Layout title="Post Trail">
        {/* Unauthenticated users */}
        <SignedOut>
          <div className="flex min-h-full flex-col items-center justify-center gap-12  bg-gradient-to-b from-postDarkBlue to-postBlue py-24">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Post Trail
            </h1>
            <p className="text-center text-white">
              Track your Post Trail packages effortlessly. Get started today.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="/sign-up"
              >
                <h3 className="text-2xl font-bold">Get Started →</h3>
                <p className="text-lg">
                  Register a new account and start tracking your packages.
                </p>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="/sign-in"
              >
                <h3 className="text-2xl font-bold">Sign In →</h3>
                <p className="text-lg">
                  Already have an account? Sign in and view your tracking
                  history.
                </p>
              </Link>
            </div>
          </div>
        </SignedOut>

        {/* Authenticated users */}
        <SignedIn>
          <div className="flex min-h-full flex-col items-center justify-center gap-12  bg-gray-100 py-24">
            <h1 className="mb-6 text-4xl font-bold">
              Welcome to your Tracking Dashboard
            </h1>
            <p className="mb-4 text-lg">
              Enter your Post Trail tracking number below to track your package:
            </p>
            <form
              className="mb-6 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                className="w-full flex-1 rounded-lg border border-gray-300 px-4 py-2 sm:w-auto"
                type="text"
                value={trackingNumber}
                onChange={handleTrackingNumberInput}
                placeholder="Enter your tracking number here"
              />
              <button
                className="rounded-lg bg-blue-500 px-4 py-2 text-white"
                type="submit"
              >
                Track
              </button>
            </form>
            <p className="mb-4">
              Don&apos;t have a tracking number? Try these: <br /> 1234567890,
              2345678901, 3456789012
            </p>

            <div className="w-full max-w-xl">
              <h2 className="mb-2 text-2xl font-bold">Tracking Result:</h2>
              {/* Add tracking result components here */}
            </div>
          </div>
        </SignedIn>
      </Layout>
    </>
  );
};

export default Home;
