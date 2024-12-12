import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import StackBar from "../../components/StackedBarChart";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AssistantIcon from '@mui/icons-material/Assistant';
import { mockStations } from "../../data/mockData";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const Station = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleFeedbackClick = () => {
    navigate("/visuals/piefeedback"); 
  };
  const handleSuggestionClick = () => {
    navigate("/visuals/piesuggestion"); 
  };

  // State for search input and station list
  const [searchInput, setSearchInput] = useState("");
  const [stationList] = useState([
    "Kolhapur",
    "MumbaiCentral",
    "CSMT",
    "Solapur",
    "Ahmednagar",
    "Miraj",
    "Thane",
  ]);

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/station/${searchInput.trim().toLowerCase()}`);
    }
  };
  const handleStackBar = () => {
    navigate("/visuals/stackBar"); // Replace "/feedback" with your actual feedback page route
  };

  return (
    <Box m="20px">
      <Box display="flex"  >
      {/* <Header title="Station" subtitle="Analytics of Station Complaints" /> */}
      <Typography variant="h3" color={colors.grey[100]} fontWeight="light bold"> Station Complaints </Typography>
      <Box
  display="flex"
  backgroundColor={colors.primary[400]}
  borderRadius="3px"
  marginBottom={3}
  marginLeft={50}
  padding="8px"
  width={"400px"}
  height={"50px"}
>
<Autocomplete
    freeSolo
    backgroundColor={colors.primary[400]}
    options={stationList}
    onInputChange={(event, newValue) => setSearchInput(newValue)}
    renderInput={(params) => (
      <TextField
        {...params}
        placeholder="Search for a station"
        variant="standard"
        backgroundColor={colors.primary[400]}
        InputProps={{
          ...params.InputProps,
          disableUnderline: true,
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
    )}
    sx={{ flex: 1 }}
  />
  <IconButton type="button" sx={{ p: 1 }} onClick={handleSearch}>
    <SearchIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />
  </IconButton>
</Box>

      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="80%"
            subtitle="Resolvement Rate"
            progress="0.80"
            icon={
              <CommentOutlinedIcon
                sx={{ color: colors.grey[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Resolved"
            progress="0.75"
            icon={
              <PlaylistAddCheckOutlinedIcon
                sx={{ color: colors.grey[100], fontSize: "40px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleSuggestionClick} // Added onClick event
          sx={{
            cursor: "pointer", // Add cursor pointer for better UX
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Suggestions"
            progress="0.55"
            icon={
              <AssistantIcon
                sx={{ color: colors.grey[100], fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleFeedbackClick} // Added onClick event
          sx={{
            cursor: "pointer", // Add cursor pointer for better UX
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Feedback"
            progress="0.35"
            icon={
              <ThumbUpAltIcon
                sx={{ color: colors.grey[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
  gridColumn="span 4"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  overflow="auto"
>
<Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`4px solid ${colors.primary[500]}`}
    p="15px"
  >
    <Typography color={colors.greenAccent[600]} variant="h3" fontWeight="700">
       CentralRailway - Stations List
    </Typography>
  </Box>
  {mockStations.map((station, i) => (
    <Box
      key={`${station.code}-${i}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid ${colors.primary[500]}`}
      p="15px"
    >
      <Box>
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          {station.name}
        </Typography>
        <Typography color={colors.grey[100]}>
          Code: {station.code}
        </Typography>
      </Box>
    </Box>
  ))}
</Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          onClick={handleStackBar} // Added onClick event
          sx={{
            cursor: "pointer", // Add cursor pointer for better UX
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
            
          >
            <Box >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}>
               Complaints, Suggestion and Feedbacks on each Category 
              </Typography>
            </Box>
          </Box>
          <Box height="250px" >
            <StackBar isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Station;

        // <Box
        //   gridColumn="span 9"
        //   gridRow="span 2"
        //   backgroundColor={colors.primary[400]}
        //   display="flex"
        //   alignItems="center"
        //   justifyContent="center"
        // > 
        //     <LineChart isDashboard={true} />
        // </Box>