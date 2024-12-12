import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


const EmpBox = ({  name, email, age, phone, position, station }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="600px" height="200px" m="10px">
      <Box display="flex" justifyContent="space-between">
        <Box p={1} mt="30px">
          <Box p={1}><Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.greenAccent[600] }}>
                {name}
          </Typography></Box>
          <Box m="5px">
            <Box  display="flex">
               <Box p={1}><PhoneIcon sx={{ color: colors.greenAccent[600] }}/> </Box>
               <Box p={1}><Typography variant="h5" fontWeight="light"> :  {phone}</Typography></Box>
            </Box>
            <Box  display="flex">
               <Box p={1}><EmailIcon sx={{ color: colors.greenAccent[600] }}/></Box>  
               <Box p={1}><Typography variant="h5" fontWeight="light"> :  {email}</Typography></Box>   
            </Box>
          </Box>
        </Box>
        <Box mt="80px" ml="10px" mr="20px">
        <Box  display="flex" >
        <Box p={1}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.greenAccent[600] }}>
                Position : 
          </Typography></Box>
        <Box p={1}>  
          <Typography 
            variant="h5" 
            fontWeight="light" 
            sx={{ color: colors.grey[100] }}>
                {position}
          </Typography>
        </Box>
        </Box>
        <Box  display="flex">
        <Box p={1}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.greenAccent[600] }}>
             Station : 
          </Typography>
        </Box>
        <Box p={1}>
          <Typography 
            variant="h5" 
            fontWeight="light" 
            sx={{ color: colors.grey[100] }}>{station}
          </Typography>
        </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmpBox;
