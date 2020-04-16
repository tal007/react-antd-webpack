import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from 'antd';

const About = ({ history }) => {
  const { goBack } = history;
  return (
    <div>
      <h1>About</h1>
      <Button onClick={goBack}>Back</Button>
    </div>
  );
};

About.propTypes = {
  history: PropTypes.object,
};

export default withRouter(About);
