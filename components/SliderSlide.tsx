import { View, Text } from "react-native";
import { SIZES } from "../constants/theme";

import styles from "../styles/global";

const SliderSlide = ({ title, text, index }) => {
  const coloredPart = index === 0 ? title.slice(-8, -1) : title;
  const nonColoredPart = index === 0 ? title.slice(0, -8) : title;
  const nonColoredPart2 = index === 0 ? title.slice(18) : title;

  return (
    <View style={{ padding: SIZES.md, gap: 10 }}>
      <Text style={styles.title}>
        {nonColoredPart}
        {index === 0 && (
          <>
            <Text style={styles.coloredDrupple}>{coloredPart}</Text>
            <Text>{nonColoredPart2}</Text>
          </>
        )}
      </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SliderSlide;
