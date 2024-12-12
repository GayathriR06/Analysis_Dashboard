import { Box , Typography, useTheme} from "@mui/material";
import LineChart from "../../../components/LineChart";
import { tokens } from "../../../theme";
const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Typography variant="h4" fontWeight="light bold">
        Number of Complaints, Suggestions and Feedbacks Received Over Period Of Years
        </Typography>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
