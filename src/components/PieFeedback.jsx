import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        // tooltip: {
        //   container: {
        //     background: "#333",
        //     color: "#fff",
        //     fontSize: "14px",
        //     borderRadius: "4px",
        //     boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
        //     padding: "8px",
        //   },
        // },
      }}
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      tooltip={({ datum }) => (
        <div
          style={{
            color: datum.color,
            background: "#222",
            padding: "8px",
            borderRadius: "4px",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div>
            <strong>ID:</strong> {datum.id || "N/A"}
          </div>
          <div>
            <strong>Value:</strong> {datum.value || "N/A"}
          </div>
          <div>
            <strong>Percentage:</strong> {datum.percentage || "N/A"}
          </div>
          <div>
            <strong>Description:</strong> {datum.description || "No description"}
          </div>
        </div>
      )}
      
      
      colors={["#33FF66", "#80E080", "#FFEB3B", "#F9A825", "#FF6F61"]} // Custom color palette for feedback
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      // fill={[
      //   {
      //     match: { id: "Excellent" },
      //     id: "dots",
      //   },
      //   {
      //     match: { id: "Good" },
      //     id: "dots",
      //   },
      //   {
      //     match: { id: "Average" },
      //     id: "lines",
      //   },
      //   {
      //     match: { id: "Bad" },
      //     id: "lines",
      //   },
      //   {
      //     match: { id: "Poor" },
      //     id: "lines",
      //   },
      // ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 400,
          translateY: -50,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#fff",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 22,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#999",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;