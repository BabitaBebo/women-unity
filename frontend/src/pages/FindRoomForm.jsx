import { useState } from "react";

const FindRoomForm = () => {
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    setAmenities((prevAmenities) =>
      prevAmenities.includes(value)
        ? prevAmenities.filter((amenity) => amenity !== value)
        : [...prevAmenities, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend
    console.log({
      location,
      amenities,
      startDate,
      endDate,
    });
    // Reset form fields after submission if needed
  };

  return (
    <div>
      <h2>Find a Room Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Amenities:
          <select multiple value={amenities} onChange={handleAmenitiesChange}>
            <option value="wifi">Wifi</option>
            <option value="kitchen">Kitchen</option>
            <option value="parking">Parking</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FindRoomForm;
