import { useEffect } from 'react';
import { motion, useAnimate, useAnimation, useInView } from 'framer-motion';
const ScrollAnimation = ({ children }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 });
    }
  }, [isInView]);
  return <div ref={scope}>{children}</div>;
};
export default ScrollAnimation;
