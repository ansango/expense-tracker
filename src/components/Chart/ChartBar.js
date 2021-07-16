import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
  const roundedValue = Math.round((value / maxValue) * 100) + "%";
  const barFillHeight = maxValue > 0 ? roundedValue : "0%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
