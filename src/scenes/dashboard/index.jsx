import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { useNavigate } from "react-router-dom";
import { mockStations } from "../../data/mockData";
import Predict from "../../components/Prediction";
import PieChart from "../../components/PieFeedback";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import RuleIcon from '@mui/icons-material/Rule';
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PieSug from "../../components/PieSuggestion";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleFeedbackClick = () => {
    navigate("/visuals/piefeedback"); 
  };
  const handlelinechart = () => {
    navigate("/visuals/line"); 
  };
  const handlePrediction = () => {
    navigate("/visuals/prediction"); 
  };
  const handleSuggestionClick = () => {
    navigate("/visuals/piesuggestion"); 
  };

  

  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

      {/* ROW 1 */}
      <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Complaints Received"
            progress="0.75"
            increase="+14%"
            icon={
              <ReceiptLongIcon
                sx={{ color: colors.grey[100], fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,225"
            subtitle="Complaints Resolved"
            progress="0.50"
            increase="+21%"
            icon={
              <PlaylistAddCheckOutlinedIcon
                sx={{ color: colors.grey[100], fontSize: "40px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleSuggestionClick} // Added onClick event
          sx={{
            cursor: "pointer", // Add cursor pointer for better UX
          }}
        >
          <StatBox
            title="2,441"
            subtitle="Suggestions"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.grey[100], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleFeedbackClick} // Added onClick event
          sx={{
            cursor: "pointer", // Add cursor pointer for better UX
          }}
        >
          <StatBox
            title="2,361"
            subtitle="Feedback"
            progress="0.35"
            increase="+3%"
            icon={
              <ThumbUpAltIcon
                sx={{ color: colors.grey[100], fontSize: "30px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          onClick={handlelinechart} 
          sx={{
            cursor: "pointer", 
          }}

        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
            
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
              Analysis of Complaints, Suggestions and Feedbacks over period of years 
              </Typography>
      
            </Box>
          </Box>
          <Box height="250px"  m="-20px 20px 50px 0px">
            <LineChart isDashboard={false} />
          </Box>
        </Box>
        <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          onClick={handlePrediction} // Added onClick event
            sx={{
              cursor: "pointer", // Add cursor pointer for better UX
            }}>
          
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
          >
            <Box mr="40px">
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.greenAccent[500]}>
                Predictive graph of recurring complaints
              </Typography>
            </Box>
          </Box>
          <Box height="400px" >
            <Predict isDashboard={false} />
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          onClick={handleFeedbackClick} 
          sx={{
            cursor: "pointer", 
          }}

        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
            
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
              Analysis of Feedbacks received from passenger for Central Railway Zone 
              </Typography>
      
            </Box>
          </Box>
          <Box height="400px"  >
            <PieChart isDashboard={true}/>
          </Box>
        </Box>
        <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}

        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            ml="50px"
            
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
              Analysis of Suggestions by Passengers on each Category
              </Typography>
      
            </Box>
          </Box>
          <Box height="400px"  >
            <PieSug isDashboard={true}/>
          </Box>
        </Box>
        
        
      </Box>
      
      </Box>
  );
};

export default Dashboard;
