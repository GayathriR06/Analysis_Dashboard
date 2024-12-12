import { Box, IconButton, InputBase } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataEmployees } from "../../data/mockData";
import Header from "../../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Employee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = mockDataEmployees.filter((row) =>
    ["name", "email", "phone", "position", "station"].some((key) =>
      row[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{ color: colors.greenAccent[300], cursor: "pointer" }}
          onClick={() => navigate(`/employee/${params.row.id}`)} // Navigate on click
        >
          {params.value}
        </Box>
      ),
    },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "position", headerName: "Position", flex: 1 },
    { field: "station", headerName: "Station", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Employees" subtitle="List of all employees" />
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        mb={3}
        p={1}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Employee;
