import Icon from "@mui/material/Icon";


export const ROUTES = [
  {
    name: "Demo",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Demo",
        collapse: [
          {
            name: "about us",
            route: "/demo1",
            component: <></>,
          },
          {
            name: "contact us",
            route: "/demo2",
            component: <></>,
          },
          {
            name: "author",
            route: "/demo3",
            component: <></>,
          },
        ],
      },
    ],
  },
];
