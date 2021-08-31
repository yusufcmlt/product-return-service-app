import { useEffect, useState } from 'react';

const useFadeAnimation = (fadeDirection = 'up') => {
  const [fadeAnimation, setFadeAnimation] = useState(``);

  useEffect(() => {
    setFadeAnimation(`fade-${fadeDirection}`);
  }, [fadeDirection]);

  return { fadeAnimation };
};

export default useFadeAnimation;
