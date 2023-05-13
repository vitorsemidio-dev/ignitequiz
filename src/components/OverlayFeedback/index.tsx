import { BlurMask, Canvas, Rect } from '@shopify/react-native-skia';
import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { THEME } from '@styles/theme';

const STATUS = [
  'transparent',
  THEME.COLORS.BRAND_LIGHT,
  THEME.COLORS.DANGER_LIGHT,
];

export enum StatusOverlayFeedbackEnum {
  DEFAULT = 0,
  SUCCESS = 1,
  ERROR = 2,
}

type Props = {
  status: StatusOverlayFeedbackEnum;
  show: boolean;
  endAnimation: () => void;
};

export function OverlayFeedback({ status, show, endAnimation }: Props) {
  const opacity = useSharedValue(0);

  const { height, width } = useWindowDimensions();

  const styleAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const color = STATUS[status];

  useEffect(() => {
    if (show) {
      opacity.value = withSequence(
        withTiming(1, { duration: 400, easing: Easing.bounce }),
        withTiming(0, undefined, (finished) => {
          if (finished) {
            ('worklet');
            runOnJS(endAnimation)();
          }
        }),
      );
    }
  }, [show]);

  return (
    <Animated.View
      style={[{ width, height, position: 'absolute' }, styleAnimated]}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height} color={color}>
          <BlurMask blur={50} style="inner" />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
