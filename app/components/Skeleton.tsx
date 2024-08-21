import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  height?: number | string;
  width?: number | string;
  count?: number;
  circle?: boolean;
  isDarkMode?: boolean;
  style?: React.CSSProperties;
}

const SkeletonWrapper = (props: Props) => {
  const { height, width, count, circle, style, isDarkMode, ...rest } = props;

  // Determine colors based on the detected theme
  const baseColor = isDarkMode ? "#3A3A3A" : "#E0E0E0";
  const highlightColor = isDarkMode ? "#4A4A4A" : "#F0F0F0";

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <Skeleton
        height={height}
        width={width}
        count={count}
        circle={circle}
        style={style}
        {...rest}
      />
    </SkeletonTheme>
  );
};

export default SkeletonWrapper;
