const Ratings = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="rating rating-sm">
      {array.map(val => (
        <div key={val}>
          <input
            type="radio"
            name="rating-3"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
          />
        </div>
      ))}
    </div>
  );
};

export default Ratings;
