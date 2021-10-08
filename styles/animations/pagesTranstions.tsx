import { useTransition } from '@react-spring/core';
import { useGlobalContext } from '../../contexts/context';

export const usePageAnimation = () => {
  const { isAnimated }: any = useGlobalContext();
  const customAnimation = useTransition(isAnimated, {
    config: isAnimated && { duration: 250 },
    from: { opacity: 0, transform: `translate3d(0px, -10px, 0px)` },
    enter: {
      opacity: 1,
      transform: `translate3d(0px, 0px, 0px)`,
    },
    leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` },
  });

  return { customAnimation };
};
