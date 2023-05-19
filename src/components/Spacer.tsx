interface SpacerProps {
  width?: string;
  height?: string;
}

const Spacer: React.FC<SpacerProps> = ({ width = "0", height = "0" }) => (
  <div style={{ width: width, height: height }} />
);

export default Spacer;
