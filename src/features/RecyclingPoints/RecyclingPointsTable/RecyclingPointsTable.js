import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(location, longitude, latitude, type) {
  return { location, longitude, latitude, type};
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function RecyclingPointsTable() {
  return (
    <Paper sx={{ padding: "5vh" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableRow>
            <TableCell>
              <b>Location Name</b>
            </TableCell>
            <TableCell>
              <b>Longtitude</b>
            </TableCell>
            <TableCell>
              <b>Latitude</b>
            </TableCell>
            <TableCell>
              <b>Type</b>
            </TableCell>
          </TableRow>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.location}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.longitude}</TableCell>
                <TableCell>{row.latitude}</TableCell>
                <TableCell>{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
