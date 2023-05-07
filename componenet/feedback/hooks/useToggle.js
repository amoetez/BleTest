import { useEffect } from 'react';

export const useToggle = ( buttonClicked, setButtonClicked ) => {

  useEffect(() => {
    if (buttonClicked) {
      const timer = setTimeout(() => {
        setButtonClicked(false)
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }

  }, [buttonClicked])

}

