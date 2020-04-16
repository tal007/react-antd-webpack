import ReactSvg from '@img/React.svg';
import { useState } from 'react';
import { Button } from 'antd';
import FooterChild from './FooterChild';
import ThemeContext from './ThemeContext';

const Footer = () => {
  const [clickTimes, setClickTimes] = useState(0);

  return (
    <ThemeContext.Provider value={clickTimes}>
      <footer className="rg-footer">
        <FooterChild />
        <Button onClick={() => setClickTimes(clickTimes + 1)}>
          Footer Click Context Provider
        </Button>
        <img src={ReactSvg} alt="ReactSvg" />
      </footer>
    </ThemeContext.Provider>
  );
};

export default Footer;
