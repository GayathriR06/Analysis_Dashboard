import { Box } from "@mui/material";
import Header from "../../../components/Header";
import PieChart from "../../../components/PieFeedback";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Feedback" subtitle="Feedback analysis of complaint resolvement for Central Railway Zone" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
