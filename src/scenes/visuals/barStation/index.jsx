import { Box } from "@mui/material";
import Header from "../../../components/Header";
import BarChartStation from "../../../components/BarChartStation";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" alignItems="center" mb="20px">
        {/* Back Button */}
        <IconButton
          onClick={() => navigate(-1)} // Go to the previous page
          sx={{ mr: 2,mb:5, backgroundColor: colors.primary[400], borderRadius: "50%" }}
        >
          <ArrowBackIcon sx={{ color: colors.greenAccent[600], fontSize: "24px" }} />
        </IconButton>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" /></Box>
      <Box height="75vh">
        <BarChartStation />
      </Box>
    </Box>
  );
};

export default Bar;
