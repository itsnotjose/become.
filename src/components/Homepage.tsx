// src/components/Homepage.tsx
import React, { useState } from "react";
import { Footer } from "./Footer";

export const Homepage = ({
  onSubscribe,
}: {
  onSubscribe: (email: string) => void;
}) => {
  const [email, setEmail] = useState("");

  return (
    <div>
    <section className="bg-gray-50" style={{ backgroundColor: "#E9ECF0" }}>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-blue-400 font-extrabold sm:text-5xl">
      💭 become.
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Elevate your life with our weekly self-development emails, designed for the busy individual.
      </p>
      

      <div className="">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 border rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="px-4 ml-2 py-2 mt-4 text-white bg-blue-400 rounded hover:bg-blue-700"
        onClick={() => onSubscribe(email)}
      >
        Subscribe
      </button>
    </div>
    </div>
  </div>
</section>
<Footer />
</div>

    
  );
};
