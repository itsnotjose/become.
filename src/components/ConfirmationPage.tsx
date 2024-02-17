// src/components/ConfirmationPage.tsx
import React from "react";

export const ConfirmationPage = () => {
  return (
    <section className="bg-gray-50" style={{ backgroundColor: "#E9ECF0" }}>
      
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Thank you for subscribing!
            <strong className="font-extrabold pt-8 text-blue-400 sm:block"> You will start receiving emails based on your interests.</strong>
          </h1>
        </div>
      </div>
    </section>
  );
};
