import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import TrainBox from "../../components/TrainBox";
import StatBox from "../../components/StatBox";
import SpeedIcon from "@mui/icons-material/Speed";
import BarChartTrain from "../../components/BarChartTrain";
import { mockDataTrains } from "../../data/mockData"; // Mock data for trains

const TrainPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams(); // Get train ID from URL
  const train = mockDataTrains.find((t) => t.id === parseInt(id, 10)); // Find the train

  if (!train) {
    return (
      <Box m="20px">
        <Typography variant="h5" color="error">
          Train not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Typography variant="h3" fontWeight="bold" mb="20px">
        Train Details
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* TrainBox */}
        <Box
          gridColumn="span 7"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TrainBox
            name={train.name}
            startStation={train.startStation}
            destination={train.destination}
            route={train.route}
          />
        </Box>

        {/* Train Route Map */}
        

        {/* StatBox */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="73%"
            subtitle="Complaint Resolvement Rate"
            progress="0.73"
            increase="+10%"
            icon={
              <SpeedIcon
                sx={{ color: colors.greenAccent[500], fontSize: "40px" }}
              />
            }
          />
        </Box>

        {/* Bar Chart */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
          >
            <Box mr="40px">
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
                Analysis of Complaint Category
              </Typography>
            </Box>
          </Box>
          <Box height="400px">
            <BarChartTrain isDashboard={false} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <iframe src={train.routeMap} 
            width="360px"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
    </iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default TrainPage;
