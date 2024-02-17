// src/components/InterestsSelection.tsx
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Fetch interests from backend
    fetch("http://localhost:3000/api/interests")
      .then((res) => res.json())
      .then(setInterests)
      .catch(console.error);
  }, []);

  const toggleInterest = (id: string) => {
    setSelectedInterests((current) =>
      current.includes(id)
        ? current.filter((interestId) => interestId !== id)
        : [...current, id]
    );
  };

  return (
    
    <fieldset>
      <legend className="sr-only">Checkboxes</legend>
      <div className="space-y-2 flex flex-col items-center justify-center h-screen  " style={{ backgroundColor: "#E9ECF0" }}>
        <h1 className="text-3xl text-blue-400 font-extrabold sm:text-5xl pb-12">choose wisely.</h1>
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
        className="px-4 py-2 mt-4 text-white bg-blue-400 rounded hover:bg-blue-700"
        onClick={() => onConfirmSubscription(selectedInterests)}
      >
        Confirm
      </button>
      </div>
     
    </fieldset>
    
  );
};
