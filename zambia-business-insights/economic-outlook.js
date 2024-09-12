const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

const EconomicOutlook = () => {
  const gdpData = [
    { year: 2021, gdp: 3.6 },
    { year: 2022, gdp: 3.5 },
    { year: 2023, gdp: 4.0 },
    { year: 2024, gdp: 4.5 },
    { year: 2025, gdp: 4.5 },
  ];

  return (
    <div className="economic-outlook">
      <div className="gdp-chart">
        <h3>GDP Growth Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={gdpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="gdp" stroke="#008751" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="economic-summary">
        <h3>Economic Outlook Summary</h3>
        <ul>
          <li>GDP Growth: 4.5% projected for 2024 and 2025</li>
          <li>Inflation: Expected to decrease from 9.3% (2024) to 7.0% (2025)</li>
          <li>Fiscal Deficit: Projected to narrow to 5.2% of GDP (2024) and 3.4% (2025)</li>
          <li>Current Account: Expected surplus of 3.3% (2024) and 8.4% (2025)</li>
        </ul>
        <p>Key sectors driving growth: mining, services, and manufacturing</p>
        <p>Risks: drought, copper price fluctuations, reform execution, global inflationary pressures</p>
      </div>
    </div>
  );
};

ReactDOM.render(
  <EconomicOutlook />,
  document.getElementById('economic-outlook-container')
);