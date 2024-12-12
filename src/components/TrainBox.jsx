import React from "react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const TrainBox = ({ name, startStation, destination, route }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      p="10px"
      backgroundColor={colors.primary[400]}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4" fontWeight="bold" color={colors.greenAccent[600]}>
        Train: {name}
      </Typography>
      <Typography variant="h5"  mt="10px">
        Departure Station: [ {startStation} ]
      </Typography>
      <Typography variant="h5"  mt="10px">
        Destination Station : [ {destination} ]
      </Typography>
      <Typography variant="h5"  mt="10px">
        Route :[ {route.join(" → ")} ]
      </Typography>
    </Box>
  );
};

export default TrainBox;
