
interface CustomizedAxisTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
  tickFormatter: (item: string | number) => string;
}

const CustomizedAxisTick: React.FC<CustomizedAxisTickProps> = ({x, y, payload,tickFormatter}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" style={{fontSize: "12px"}}>
        {tickFormatter(payload.value)}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;