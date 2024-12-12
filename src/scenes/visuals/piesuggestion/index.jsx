import { Box, Typography,useTheme } from "@mui/material";
import PieChart from "../../../components/PieSuggestion";
import { tokens } from "../../../theme";

const PieSug = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Typography variant="h4" fontWeight="light bold" marginBottom="40px" sx={{ color: colors.greenAccent[500] }}>
      Analysis of Suggestions by Passengers on each Category
      </Typography>
      <Box height="75vh">
        <PieChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default PieSug;
