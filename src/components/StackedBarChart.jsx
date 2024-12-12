import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockStackBar";

// Updated keys for 17 categories
const keys = [
  "Medical", "Security", "Water", "cleanliness", "Reserved Ticketing",
  "Refund of Tickets", "Unreserved Ticketing", "Passenger Amenities",
  "Divyangjan Facilities", "Facilities for Women", "Luggage/ Parcel",
  "Electrical Equipment", "Staff Behaviour", "Catering services", "Goods",
  "Corruption/ Bribery", "Miscellaneous"
];

const StackBar = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette?.mode || "light");

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey?.[100] || "#ccc" } },
          legend: { text: { fill: colors.grey?.[100] || "#ccc" } },
          ticks: {
            line: { stroke: colors.grey?.[100] || "#ccc", strokeWidth: 1 },
            text: { fill: colors.grey?.[100] || "#ccc" },
          },
        },
        legends: { text: { fill: colors.grey?.[100] || "#ccc" } },
      }}
      keys={keys}
      indexBy="category"
      margin={{ top: 10, right: 200, bottom: 60, left: 90 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      layout="horizontal"
      // colors={({ id, data }) => data[`${id}Color`]} // Fetch the color dynamically
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count",
        legendPosition: "middle",
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "",
        legendPosition: "middle",
        legendOffset: -70,
      }}
      enableLabel={true}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 10,
          effects: [
            {
              on: "hover",
              style: { itemOpacity: 1 },
            },
          ],
        },
      ]}
      tooltip={(bar) => (
        <div
          style={{
            background: "white",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <strong>{bar.id}</strong>: {bar.value} <br />
          <small>Category: {bar.indexValue}</small>
        </div>
      )}
      role="application"
      barAriaLabel={(bar) =>
        `${bar.id}: ${bar.formattedValue} in category: ${bar.indexValue}`
      }
    />
  );
};

export default StackBar;
