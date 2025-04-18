
import { useState } from 'react';

export const useBackgroundImage = (defaultImage: string) => {
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);

  const changeBackgroundImage = (newImage: string) => {
    setBackgroundImage(newImage);
  };

  return { backgroundImage, changeBackgroundImage };
};
