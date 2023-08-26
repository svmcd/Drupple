import { SvgXml } from "react-native-svg";

const svg = `<svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="13.0063" width="30.7754" height="3.07754" rx="1.53877" transform="rotate(-25 0 13.0063)" fill="#EEEEEE"/>
<rect x="53.1279" y="15.7955" width="30.7754" height="3.07754" rx="1.53877" transform="rotate(-155 53.1279 15.7955)" fill="#EEEEEE"/>
</svg>
`;

const BoomerangUp = ({ styles }) => {
  return <SvgXml xml={svg} height="10%" style={styles} />;
};

export default BoomerangUp;
