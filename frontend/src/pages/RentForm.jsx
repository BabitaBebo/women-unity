import { useState } from "react";

const RentForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [rent, setRent] = useState("");
  const [minRentalTime, setMinRentalTime] = useState("");
  const [maxRentalTime, setMaxRentalTime] = useState("");
  const [availableDates, setAvailableDates] = useState([]);

  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    setAmenities((prevAmenities) =>
      prevAmenities.includes(value)
        ? prevAmenities.filter((amenity) => amenity !== value)
        : [...prevAmenities, value]
    );
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    // Assuming availableDates is an array of strings representing dates
    setAvailableDates((prevDates) =>
      prevDates.includes(value)
        ? prevDates.filter((date) => date !== value)
        : [...prevDates, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend
    console.log({
      title,
      location,
      amenities,
      rent,
      minRentalTime,
      maxRentalTime,
      availableDates,
    });
    // Reset form fields after submission if needed
  };

  return (
    <div>
      <h2>Room Rental Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
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
          Rent:
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Minimum Rental Time (days):
          <input
            type="number"
            value={minRentalTime}
            onChange={(e) => setMinRentalTime(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Maximum Rental Time (days):
          <input
            type="number"
            value={maxRentalTime}
            onChange={(e) => setMaxRentalTime(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Available Dates:
          <input
            type="date"
            value={availableDates}
            onChange={handleDateChange}
            required
          />
          {/* Add button to add more dates dynamically if needed */}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RentForm;
