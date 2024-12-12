import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Predict from "../../../components/Prediction";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Prediction Analysis" subtitle="A projection of predicted recurring issues across various categories to prevent future occurrences and enable proactive maintenance." />
      <Box height="60vh">
        <Predict isDashboard={true}/>
      </Box>
    </Box>
  );
};

export default Bar;
