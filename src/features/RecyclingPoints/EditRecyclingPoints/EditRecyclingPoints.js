import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import EditRecyclingPointsForm from "../RecyclingPointsForm/EditRecyclingPointsForm";

export default function EditRecyclingPoints() {
  return (
    <MKBox sx={{ margin: "5vh" }}>
      <MKTypography variant="h3">Edit Recycling Point</MKTypography>
      <EditRecyclingPointsForm />
    </MKBox>
  );
}
