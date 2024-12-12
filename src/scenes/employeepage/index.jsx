import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { mockDataEmployees } from "../../data/mockData";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import EmpBox from "../../components/EmpBox";
import SpeedIcon from '@mui/icons-material/Speed';
import StatBox from "../../components/StatBox";
import Header from "../../components/Header";
import LineChart from "../../components/Employeeline";

const EmployeePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams(); // Get employee id from URL
  const employee = mockDataEmployees.find((emp) => emp.id === parseInt(id, 10)); // Find the employee

  if (!employee) {
    return (
      <Box m="20px">
        <Typography variant="h5" color="error">
          Employee not found.
        </Typography>
      </Box>
    );
  }
 
  return (
   <Box m="20px"> 
   <Box m="20px">
   <Typography variant="h3" fontWeight="bold"> Employee Details</Typography>
   </Box>
    <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
      <Box
          gridColumn="span 7"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <EmpBox    
          name={employee.name} 
          email={employee.email} 
          phone={employee.phone} 
          position={employee.position}
          station= {employee.station} />
        </Box>

        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="73%"
            subtitle="Average Speed of Resolvement"
            progress="0.75"
            increase="+14%"
            icon={
              <SpeedIcon
                sx={{ color: colors.grey[100], fontSize: "40px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 9"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        > 
            <LineChart isDashboard={false} />
        </Box>
      </Box>
         
    </Box>
    
  );
};

export default EmployeePage;
