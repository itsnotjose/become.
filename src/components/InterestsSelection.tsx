// src/components/InterestsSelection.tsx
import React, { useEffect, useState } from "react";
import LoadingComponent from "./Loader";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
interface Interest {
  _id: string;
  name: string;
}

export const InterestsSelection = ({
  email,
  onConfirmSubscription,
}: {
  email: string;
  onConfirmSubscription: (interests: string[]) => void;
}) => {
  const [interests, setInterests] = useState<Interest[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Start loading
    fetch(`${API_BASE_URL}/api/interests`)
      .then((res) => res.json())
      .then((data) => {
        setInterests(data);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Stop loading on error
      });
  }, []);
  const toggleInterest = (id: string) => {
    setSelectedInterests((current) =>
      current.includes(id)
        ? current.filter((interestId) => interestId !== id)
        : [...current, id]
    );
  };
  useEffect(() => {
    setLoading(true); // Start loading
    fetch(`${API_BASE_URL}/api/interests`)
      .then((res) => res.json())
      .then((data) => {
        setInterests(data);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingComponent/>
      </div>
    );
  }
  return (

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">The</span>
        </span>{' '}
        Select a Topic
      </h2>
      
      <fieldset>
      <legend className="sr-only">Checkboxes</legend>
      <div className="space-y-2   " >

        {interests.map((interest) => (
          <label
            htmlFor={interest._id}
            key={interest._id}
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={interest._id}
                className="size-4 rounded border-gray-300"
                checked={selectedInterests.includes(interest._id)}
                onChange={() => toggleInterest(interest._id)}
              />
              &#8203;
            </div>
            <div>
              <strong className="font-medium text-gray-900">{interest.name}</strong>
            </div>
          </label>
        ))}
         <button
        className="px-4 py-2 mt-4 text-white bg-black rounded hover:bg-gray-300 hover:text-black"
        onClick={() => onConfirmSubscription(selectedInterests)}
      >
        Submit
      </button>
      </div>
     
    </fieldset>
    </div>
   
  </div>
    
    
    
  );
};
