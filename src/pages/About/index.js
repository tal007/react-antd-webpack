import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from 'antd';

function useCounter(initialState) {
  const [count, setCount] = useState(initialState);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const resetCouunt = () => setCount(0);

  return [count, { increase, decrease, resetCouunt }];
}

const About = ({ history }) => {
  const { goBack } = history;
  const [count, countControl] = useCounter(10);

  return (
    <div>
      <h1>
        About
        {count}
      </h1>
      <Button onClick={countControl.increase}>increase</Button>
      <Button onClick={countControl.decrease}>decrease</Button>
      <Button onClick={countControl.resetCouunt}>resetCouunt</Button>
      <Button onClick={goBack}>Back</Button>
    </div>
  );
};

About.propTypes = {
  history: PropTypes.object,
};

export default withRouter(About);
