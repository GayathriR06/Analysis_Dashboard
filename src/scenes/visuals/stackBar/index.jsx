import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import StackBar from "../../../components/StackedBarChart";
import { tokens } from "../../../theme";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Typography variant="h4" fontWeight="light bold" marginBottom="40px" sx={{ color: colors.greenAccent[500] }}>
      Analysis of Complaints, Suggestions and Feedbacks by Passengers on each Category
      </Typography>
      <Box height="60vh">
        <StackBar isDashboard={false}/>
      </Box>
    </Box>
  );
};

export default Bar;
