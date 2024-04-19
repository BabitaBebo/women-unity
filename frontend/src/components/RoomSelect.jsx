import { useState } from "react";
import RentForm from "../pages/RentForm";
import FindRoomForm from "../pages/FindRoomForm";

const RoomSelect = () => {
  const [choice, setChoice] = useState(null);

  const handleChoice = (selectedChoice) => {
    setChoice(selectedChoice);
  };

  return (
    <div>
      <h1>Welcome to Womens Vacation Rentals</h1>
      <p>Choose an option:</p>
      <button onClick={() => handleChoice("rent")}>
        I Have a Room to Rent
      </button>
      <button onClick={() => handleChoice("find")}>Find a Room to Rent</button>

      {choice === "rent" && <RentForm />}
      {choice === "find" && <FindRoomForm />}
    </div>
  );
};

// const RentForm = () => {
//   return (
//     <div>
//       <h2>Room Rental Form</h2>

//     </div>
//   );
// };

// const FindRoomForm = () => {
//   return (
//     <div>
//       <h2>Find a Room Form</h2>

//     </div>
//   );
// };

export default RoomSelect;

// const RoomSelect = () => {
//   return (
//     <>
//       <div className="flex justify-center mt-[100px]">
//         <div className="flex justify-center items-center mr-3 w-[300px] h-[300px] border-gray-700 rounded-lg bg-amber-800 text-2xl hover:bg-amber-900 hover:text-gray-300  ">
//           Select a room
//         </div>
//         <div className="flex justify-center items-center w-[300px] h-[300px] border-gray-700 rounded-lg text-center text-2xl bg-amber-800 hover:bg-amber-900 hover:text-gray-300">
//           I have a room{" "}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RoomSelect;
