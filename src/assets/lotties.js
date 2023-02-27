import Lottie from 'react-lottie-player';
import uianimation from '../assets/skills/uiux-lotti.json';
import codeanimation from '../assets/skills/programming.json';
import graphicsanimation from '../assets/skills/graphics2.json';
import mobileanimation from '../assets/skills/mobiledev.json';

export default function UILottieAnimation(props) {
  return <Lottie animationData={uianimation} {...props} />;
}

export function CodeLottieAnimation(props) {
  return <Lottie animationData={codeanimation} {...props} />;
}

export function GraphicLottieAnimation(props) {
  return <Lottie animationData={graphicsanimation} {...props} />;
}
export function MobileLottieAnimation(props) {
  return <Lottie animationData={mobileanimation} {...props} />;
}