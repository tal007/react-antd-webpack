import { useEffect } from 'react';
import ThemeContext from './ThemeContext';

const FooterConsumer = () => {
  useEffect(() => {
    console.log('footer child');
  });
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div>
          <h2>
            Context Consumer
            {value}
          </h2>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default FooterConsumer;
