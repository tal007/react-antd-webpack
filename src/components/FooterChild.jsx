import { useEffect } from 'react';
import FooterConsumer from './FooterConsumer';

const FooterChild = () => {
  useEffect(() => {
    console.log('footer consumer');
  });
  return (
    <div>
      Footer child
      <FooterConsumer />
    </div>
  );
};

export default FooterChild;
