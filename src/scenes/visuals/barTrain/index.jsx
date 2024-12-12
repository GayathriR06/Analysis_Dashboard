import { Box, Typography} from "@mui/material";
import Header from "../../../components/Header";
import BarChartTrain from "../../../components/BarChartTrain";

const BarTrain = () => {
  return (
    <Box m="20px">
      <Typography variant="h5">Analysis of Complaints for Each Category</Typography>
      <Box height="75vh" >
      <BarChartTrain isDashboard={false} />
      </Box>
    </Box>
  );
};

export default BarTrain;
