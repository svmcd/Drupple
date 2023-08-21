import { SvgXml } from "react-native-svg";

const Dots = ({ index, styles }) => {
  const svgArray = [
    `<svg width="79" height="24" viewBox="0 0 79 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4632 14.5526C17.4632 19.3749 13.5539 23.2842 8.73159 23.2842C3.90927 23.2842 1.30151e-05 19.3749 1.30151e-05 14.5526C1.30151e-05 9.73031 5.82107 3.8807 8.73159 0C11.6421 3.8807 17.4632 9.73031 17.4632 14.5526Z" fill="#5FBFF9"/>
    <circle cx="38.6684" cy="14.5526" r="8.73158" fill="#C0E7FF"/>
    <circle cx="70.2684" cy="14.5526" r="8.73158" fill="#C0E7FF"/>
    </svg>`,
    `<svg width="79" height="24" viewBox="0 0 79 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48.4632 14.5526C48.4632 19.3749 44.5539 23.2842 39.7316 23.2842C34.9093 23.2842 31 19.3749 31 14.5526C31 9.73031 36.8211 3.8807 39.7316 0C42.6421 3.8807 48.4632 9.73031 48.4632 14.5526Z" fill="#5FBFF9"/>
    <circle cx="8.73158" cy="14.7316" r="8.73158" fill="#C0E7FF"/>
    <circle cx="70.2684" cy="14.5526" r="8.73158" fill="#C0E7FF"/>
    </svg>`,
    `<svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M79.4632 14.5526C79.4632 19.3749 75.5539 23.2842 70.7316 23.2842C65.9093 23.2842 62 19.3749 62 14.5526C62 9.73031 67.8211 3.8807 70.7316 0C73.6421 3.8807 79.4632 9.73031 79.4632 14.5526Z" fill="#5FBFF9"/>
        <circle cx="8.73158" cy="14.7316" r="8.73158" fill="#C0E7FF"/>
        <circle cx="39.7316" cy="14.7316" r="8.73158" fill="#C0E7FF"/>
        </svg>`,
  ];

  const selectedSvg = svgArray[index];

  return <SvgXml xml={selectedSvg} height="45%" style={styles} />;
};

export default Dots;
