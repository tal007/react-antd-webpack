import { Modal, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const CusModal = (props) => {
  const { children, title } = props;
  return (
    <section className="cus-modal">
      <header>{title}</header>
      <section className="cus-modal-content">{children}</section>
    </section>
  );
};

CusModal.propTypes = {
  title: PropTypes.string,
};

export default CusModal;
