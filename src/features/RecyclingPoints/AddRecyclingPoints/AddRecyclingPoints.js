import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import RecyclingPointsForm from "../RecyclingPointsForm/RecyclingPointsForm";

export default function AddRecyclingPoints() {
  return (
    <MKBox sx={{ margin: "5vh" }}>
      <MKTypography variant="h3">Add Recycling Points</MKTypography>
      <RecyclingPointsForm />
    </MKBox>
  );
}
