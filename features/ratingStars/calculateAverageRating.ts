interface Rating {
  rating: number;
}

export default function calculateAverageRating(
  ratings: Rating[]
): number | null {
  if (ratings.length === 0) {
    return null;
  }

  const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
  const averageRating = totalRating / ratings.length;
  return averageRating;
}

// Пример использования функции
const ratings: Rating[] = [
  { rating: 1 },
  { rating: 5 },
  { rating: 3 },
  { rating: 2 },
  { rating: 5 },
];

const averageRating = calculateAverageRating(ratings);
console.log("Средний рейтинг:", averageRating);
