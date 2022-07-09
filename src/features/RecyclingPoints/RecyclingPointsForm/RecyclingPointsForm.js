import { useState, useEffect } from "react";
import { Paper } from "@mui/material";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useNavigate, useParams } from "react-router-dom";
import { addBin } from "api/Api";
// import { getBin } from "api/Api";

export default function RecyclingPointsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bin, setBin] = useState("");
  const [name, setName] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

//   useEffect(() => {
//     getBin(id);
//   }, [id]);

  const onCancelClicked = () => {
    navigate(-1);
  };

  const onFormSubmit = () => {
    console.log(name, long, lat);
    if (id) {
      //call edit api
    } else {
      //call add api
      addBin({ lat, long, name });
    }
  };

  return (
    <Paper sx={{ marginTop: "3vh", padding: "3vh", minHeight: "40vh" }}>
      <MKBox component="form" role="form">
        <MKBox mb={3}>
          <MKInput
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </MKBox>
        <MKBox mb={3}>
          <MKInput
            type="number"
            label="Longtitude"
            fullWidth
            value={long}
            onChange={(e) => setLong(e.target.value)}
          />
        </MKBox>
        <MKBox mb={3}>
          <MKInput
            type="number"
            label="Latitude"
            fullWidth
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </MKBox>
      </MKBox>
      <div style={{ float: "right" }}>
        <MKButton variant="outlined" color="info" onClick={onCancelClicked}>
          Cancel
        </MKButton>
        <MKButton
          sx={{ marginLeft: "1vh" }}
          color="info"
          onClick={onFormSubmit}
        >
          {id ? "Edit" : "Add"}
        </MKButton>
      </div>
    </Paper>
  );
}
