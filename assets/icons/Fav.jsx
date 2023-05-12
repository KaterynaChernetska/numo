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
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
        d="m12.515 23.378-1.898-1.78a76.151 76.151 0 0 1-5.265-5.438C3.784 14.362 3 12.38 3 10.215c0-1.77.578-3.249 1.732-4.435C5.888 4.593 7.328 4 9.05 4c.972 0 1.888.212 2.75.635A6.582 6.582 0 0 1 14 6.373a6.582 6.582 0 0 1 2.2-1.738A6.155 6.155 0 0 1 18.95 4c1.723 0 3.163.593 4.317 1.78C24.422 6.966 25 8.444 25 10.215c0 2.165-.78 4.152-2.337 5.96-1.559 1.808-3.328 3.625-5.308 5.452l-1.87 1.752c-.422.414-.917.621-1.485.621-.568 0-1.063-.207-1.485-.622Z"
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