import MKBox from "components/MKBox";

import bgImage from "assets/images/city-profile.jpg";
import Header from "components/Header/Header";
import RecyclingPointsTable from "../RecyclingPointsTable/RecyclingPointsTable";
import { useNavigate } from "react-router-dom";

export default function ManageRecyclingPoints() {
  const navigate = useNavigate();
  const onAddRecyclingPointsClicked = () => {
    navigate("add");
  };
  return (
    <MKBox bgColor="white">
      <Header
        title="Manage Recycling Points"
        bgImage={bgImage}
        buttonContent="Add Recycling Points"
        onClick={onAddRecyclingPointsClicked}
      />
      <RecyclingPointsTable />
    </MKBox>
  );
}
