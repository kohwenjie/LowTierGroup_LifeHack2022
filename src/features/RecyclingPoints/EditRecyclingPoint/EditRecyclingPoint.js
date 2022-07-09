import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import RecyclingPointsForm from "../RecyclingPointsForm/RecyclingPointsForm";

export default function EditRecyclingPoint() {
  return (
    <MKBox sx={{ margin: "5vh" }}>
      <MKTypography variant="h3">Edit Recycling Point</MKTypography>
      <RecyclingPointsForm />
    </MKBox>
  );
}
