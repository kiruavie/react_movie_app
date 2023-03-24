import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
    onFilter({ title: event.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
    onFilter({ title: titleFilter, rating: event.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
