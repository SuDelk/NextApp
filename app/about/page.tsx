"use client";
import { useState } from "react";

export default function About() {
  const [count, setCount] =
    useState(0); /* doesnt work in server component (react hooks) */
  console.log("About page loaded");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          About Us Page
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-6">
          This is the About Us page of our application. Here you can find more
          information about our mission and values.
        </p>
      </main>
      {/* doesnt work in server component (onclick part) */}
      <button
        onClick={() => {
          alert("Yo yo yoo");
        }}
      >
        Click
      </button>
    </div>
  );
}
