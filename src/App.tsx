import React, { useState } from "react";
import { Homepage } from "./components/Homepage";
import { InterestsSelection } from "./components/InterestsSelection";
import { ConfirmationPage } from "./components/ConfirmationPage";

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (email: string) => {
    setEmail(email);
    setStep(2);
  };

  const handleConfirmSubscription = (interests: string[]) => {
    // Use selectedInterests here if needed, otherwise remove it
    // For example, you might want to log the selected interests or perform additional actions
    console.log(interests); 

    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, interests }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => setStep(3))
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  return (
    <div className="app">
      {step === 1 && <Homepage onSubscribe={handleSubscribe} />}
      {step === 2 && (
        <InterestsSelection
          email={email}
          onConfirmSubscription={handleConfirmSubscription}
        />
      )}
      {step === 3 && <ConfirmationPage />}
    </div>
  );
};

export default App;
