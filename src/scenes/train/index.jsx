import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import BarChartTrain from "../../components/BarChartTrain";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SpeedIcon from '@mui/icons-material/Speed';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Train = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const navigate = useNavigate(); // For navigation
  const handleBarchart = () =>{
    navigate("/visuals/barTrain") }

  // List of valid train numbers for Autocomplete
  const trainList = ["12901", "11077", "11027", "12127", "12009"];

  const handleSearch = () => {
    // Validate the train number
    if (trainList.includes(searchInput.trim())) {
      navigate(`/train/${searchInput.trim()}`); // Navigate to train page
    } else {
      alert("Train number not found! Please enter a valid train number.");
    }
  };

  return (
    <Box m="20px">
      {/* Header and Search Bar */}
      <Box display="flex" marginTop="1px">
        <Header title="Train" subtitle="Analytics of Train Complaints" />
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
            options={trainList} // Pass the train numbers as options
            onInputChange={(event, newValue) => setSearchInput(newValue)} // Update search input
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search by Train Number"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch(); // Handle Enter key
                  }
                }}
              />
            )}
            sx={{ flex: 1 }}
          />
          <IconButton type="button" sx={{ p: 1 }} onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Content Grid */}
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
            title="89%"
            subtitle="Resolvement Rate"
            progress="0.95"
            icon={
              <SpeedIcon
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
        >
          <StatBox
            title="6,234"
            subtitle="Complaints Resolved"
            progress="0.8"
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
        >
          <StatBox
            title="248"
            subtitle="No. of Suggestions"
            progress="0.55"
            icon={
              <CommentOutlinedIcon
                sx={{ color: colors.grey[100], fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="568"
            subtitle=" No. of Feedbacks"
            progress="0.35"
            icon={
              <ThumbUpAltIcon
                sx={{ color: colors.grey[100], fontSize: "30px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 11"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
          >
            <Box mr="40px">
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[100]}>
                Analysis of Complaints Received and Resolved for each Category 
              </Typography>
            </Box>
          </Box>
          <Box height="400px" >
            <BarChartTrain isDashboard={false} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Train;
