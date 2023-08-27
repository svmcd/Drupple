import { SvgXml } from "react-native-svg";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2400 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sssurf-grad"><stop stop-color="#5FBFF9" stop-opacity="1" offset="0%"></stop><stop stop-color="#5FBFF9" stop-opacity="1" offset="100%"></stop></linearGradient></defs><g fill="url(#sssurf-grad)" transform="matrix(1,0,0,1,9.4296875,169.81778717041016)"><path d="M-10,10C33.75,13.541666666666668,114.58333333333334,31.375,200,27C285.41666666666663,22.625,316.66666666666663,-10.375,400,-11C483.33333333333337,-11.625,516.6666666666666,23.583333333333332,600,24C683.3333333333334,24.416666666666668,716.6666666666666,-10.875,800,-9C883.3333333333334,-7.125,916.6666666666666,32.583333333333336,1000,33C1083.3333333333333,33.416666666666664,1116.6666666666667,-10.333333333333332,1200,-7C1283.3333333333333,-3.666666666666667,1316.6666666666667,51.916666666666664,1400,49C1483.3333333333333,46.083333333333336,1516.6666666666667,-20.166666666666668,1600,-21C1683.3333333333333,-21.833333333333332,1716.6666666666667,44.375,1800,45C1883.3333333333333,45.625,1916.6666666666667,-19.666666666666668,2000,-18C2083.3333333333335,-16.333333333333332,2116.6666666666665,52.375,2200,53C2283.3333333333335,53.625,2306.25,-87.29166666666667,2400,-15C2493.75,57.29166666666667,3254.1666666666665,209.375,2650,400C2045.8333333333335,590.625,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,99)" opacity="0.05"></path><path d="M-10,10C33.75,13.541666666666668,114.58333333333334,31.375,200,27C285.41666666666663,22.625,316.66666666666663,-10.375,400,-11C483.33333333333337,-11.625,516.6666666666666,23.583333333333332,600,24C683.3333333333334,24.416666666666668,716.6666666666666,-10.875,800,-9C883.3333333333334,-7.125,916.6666666666666,32.583333333333336,1000,33C1083.3333333333333,33.416666666666664,1116.6666666666667,-10.333333333333332,1200,-7C1283.3333333333333,-3.666666666666667,1316.6666666666667,51.916666666666664,1400,49C1483.3333333333333,46.083333333333336,1516.6666666666667,-20.166666666666668,1600,-21C1683.3333333333333,-21.833333333333332,1716.6666666666667,44.375,1800,45C1883.3333333333333,45.625,1916.6666666666667,-19.666666666666668,2000,-18C2083.3333333333335,-16.333333333333332,2116.6666666666665,52.375,2200,53C2283.3333333333335,53.625,2306.25,-87.29166666666667,2400,-15C2493.75,57.29166666666667,3254.1666666666665,209.375,2650,400C2045.8333333333335,590.625,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,198)" opacity="0.53"></path><path d="M-10,10C33.75,13.541666666666668,114.58333333333334,31.375,200,27C285.41666666666663,22.625,316.66666666666663,-10.375,400,-11C483.33333333333337,-11.625,516.6666666666666,23.583333333333332,600,24C683.3333333333334,24.416666666666668,716.6666666666666,-10.875,800,-9C883.3333333333334,-7.125,916.6666666666666,32.583333333333336,1000,33C1083.3333333333333,33.416666666666664,1116.6666666666667,-10.333333333333332,1200,-7C1283.3333333333333,-3.666666666666667,1316.6666666666667,51.916666666666664,1400,49C1483.3333333333333,46.083333333333336,1516.6666666666667,-20.166666666666668,1600,-21C1683.3333333333333,-21.833333333333332,1716.6666666666667,44.375,1800,45C1883.3333333333333,45.625,1916.6666666666667,-19.666666666666668,2000,-18C2083.3333333333335,-16.333333333333332,2116.6666666666665,52.375,2200,53C2283.3333333333335,53.625,2306.25,-87.29166666666667,2400,-15C2493.75,57.29166666666667,3254.1666666666665,209.375,2650,400C2045.8333333333335,590.625,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,297)" opacity="1.00"></path></g></svg>`;

const Waves = ({ styles }) => {
  return <SvgXml xml={svg} height="100%" style={styles} />;
};

export default Waves;
