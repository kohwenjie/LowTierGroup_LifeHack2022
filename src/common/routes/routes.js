import Icon from "@mui/material/Icon";
import AddRecyclingPoints from "features/RecyclingPoints/AddRecyclingPoints/AddRecyclingPoints";
import ManageRecyclingPoints from "features/RecyclingPoints/ManageRecyclingPoints/ManageRecyclingPoints";

export const ROUTES = [
  {
    name: "Recycling Points",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Recycling Points",
        collapse: [
          {
            name: "Manage Recycling Points",
            route: "/admin/recyclingPoints",
            component: <ManageRecyclingPoints />,
          },
          {
            name: "Add Recycling Points",
            route: "/admin/recyclingPoints/add",
            component: <AddRecyclingPoints />,
          },
        ],
      },
    ],
  },
];
export const EMPTY_ROUTES = [{}, {}];
