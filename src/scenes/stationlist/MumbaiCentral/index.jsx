import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import { useTheme } from "@mui/material";
import StatBox from "../../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BarChart from "../../../components/BarChartStation";

const MMCT = () => {
  const { stationName } = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box m="20px">
      <Box display="flex" alignItems="center" mb="20px">
        {/* Back Button */}
        <IconButton
          onClick={() => navigate(-1)} // Go to the previous page
          sx={{ mr: 2,mb:5, backgroundColor: colors.primary[400], borderRadius: "50%" }}
        >
          <ArrowBackIcon sx={{ color: colors.greenAccent[600], fontSize: "24px" }} />
        </IconButton>
        {/* Header */}
        <Header title="Mumbai Central - MMCT " subtitle="Analytics of Mumbai Junction Complaints" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        
        <Box
          gridColumn="span 9"
          gridRow="span 4"
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
                color={colors.grey[100]}>
                Analysis of Complaints, Suggestions and Feedbacks Received on each Category 
              </Typography>
            </Box>
          </Box>
          <Box height="550px" >
            <BarChart isDashboard={false} />
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="80%"
            subtitle="Resolvement Rate"
            progress="0.80"
            icon={
              <CommentOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
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
            title="12,361"
            subtitle="Suggestions"
            progress="0.55"
            icon={
              <PlaylistAddCheckOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
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
            title="12,361"
            subtitle="Feedback"
            progress="0.35"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MMCT;
