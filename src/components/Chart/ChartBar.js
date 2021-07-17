const ChartBar = ({ value, maxValue, label }) => {
  const roundedValue = Math.round((value / maxValue) * 100) + "%";
  const barFillHeight = maxValue > 0 ? roundedValue : "0%";

  return (
    <div className="flex flex-col h-full items-center">
      <div className="h-full w-full border-2 border-red-500 rounded-lg overflow-hidden flex flex-col justify-end">
        <div
          className="bg-red-500 w-full transition-all duration-1000 ease-in-out"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="text-center text-red-900" style={{ fontSize: "0.6rem" }}>
        {label}
      </div>
    </div>
  );
};

export default ChartBar;
