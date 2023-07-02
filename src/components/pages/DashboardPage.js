import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashBoardPage(props) {
  const navigate = useNavigate();

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const options = [
    {
      label: "Location1",
      value: "location1",
    },
    {
      label: "Location2",
      value: "location2",
    },
    {
      label: "Location3",
      value: "location3",
    },
    {
      label: "Location4",
      value: "location4",
    },
  ];

  return (
    <div className="App container shadow">
      <h2 className="text-center my-3">Book your ride</h2>
      <div className="col-md-12 my-3 items-center justify-content-center">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Pickup location:
          </label>
          <select
            id="role"
            name="role"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="form-control"
            required
          >
            <option value="">--Choose--</option>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Drop location:
          </label>
          <select
            id="role"
            name="role"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="form-control"
            required
          >
            <option value="">--Choose--</option>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          onClick={() =>
            navigate("/rideOptions", { state: { pick: pickup, drop: drop } })
          }
        >
          Request Ride
        </button>
        <div className="mt-3">
          <button type="submit" onClick={() => navigate("/giveRating")}>
            Rate Ride
          </button>
        </div>
        <div>
          <button
            className="mt-2"
            type="submit"
            onClick={() => navigate("/editRating")}
          >
            Edit Rating
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
