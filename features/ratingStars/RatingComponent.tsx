import React from "react";
import RatingComponent from "./RatingComponent";
import { useAddToRating } from "./use-rating";

function App() {
  const addToRatingMutation = useAddToRating();

  const handleAddToRating = async () => {
    try {
      const newRating = { rating: 5, productId: 123 }; // Замените значения на актуальные
      await addToRatingMutation.mutateAsync(newRating);
      console.log("Rating added successfully!");
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };

  return (
    <div>
      <h1>App</h1>

      <button onClick={handleAddToRating}>Add Rating</button>
    </div>
  );
}

export default App;
