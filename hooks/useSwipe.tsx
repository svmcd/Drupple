import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export function useSwipe(onSwipeUp?: any, onSwipeDown?: any, rangeOffset = 8) {
  let firstTouch = 0;

  // set user touch start position
  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageY;
  }

  // when touch ends check for swipe directions
  function onTouchEnd(e: any) {
    // get touch position and screen size
    const positionX = e.nativeEvent.pageY;
    const range = windowWidth / rangeOffset;

    // check if position is growing negatively and has reached specified range
    if (positionX - firstTouch > range) {
      onSwipeDown && onSwipeDown();
    }
    // check if position is growing positively and has reached specified range
    else if (firstTouch - positionX > range) {
      onSwipeUp && onSwipeUp();
    }
  }

  return { onTouchStart, onTouchEnd };
}
