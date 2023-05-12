import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#9763FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
        d="M14 9v5h4m7 0c0 6.075-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3s11 4.925 11 11Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
