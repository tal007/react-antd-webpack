import { List, Button, Checkbox, message, Modal, Row, Col } from 'antd';
import CusModal from '../../components/Modal';

// const AccountTableHeader = () => (
//   <Row justify="space-around">
//     <Col className="flex-1">账号</Col>
//     <Col className="flex-1">操作</Col>
//     <Col className="flex-1">权限</Col>
//   </Row>
// );

const AccountTable = () => {
  const dataSource = [
    {
      key: '1',
      account: '张三',
    },
    {
      key: '2',
      account: '李四',
    },
  ];

  function onChange(e, value) {
    message.info(`checked ${value.account} = ${e.target.checked}`);
  }

  function resetPassword(value) {
    Modal.confirm({
      content: (
        <CusModal>
          <div style={{ textAlign: 'center' }}>
            <div>{`账号密码 ${value.account} 账号密码`}</div>
            <div style={{ color: '#ccc' }}>重置后密码为6个0</div>
          </div>
        </CusModal>
      ),
      centered: true,
      okText: '确认',
      cancelText: '取消',
      onOk() {
        message.info(`重置${value.account}密码`);
      },
    });
  }

  function deleteAccount(value) {
    Modal.confirm({
      content: (
        <CusModal>
          <div style={{ textAlign: 'center' }}>
            请确认删除账号：
            <span style={{ color: '#1890ff' }}>{value.account}</span>
          </div>
        </CusModal>
      ),
      centered: true,
      okText: '确认',
      cancelText: '取消',
      onOk() {
        message.info(`删除账号${value.account}`);
      },
    });
  }
  return (
    <section className="account-table">
      <List bordered>
        {dataSource.map((value) => (
          <List.Item key={value.account}>
            <Row className="flex-1" justify="space-between" align="middle">
              <Col>
                账号：
                {value.account}
              </Col>
              <Col>
                <Row align="middle">
                  操作：
                  <Col>
                    <Button type="link" onClick={() => resetPassword(value)}>
                      重置密码
                    </Button>
                  </Col>
                  <Col>
                    <Button type="link" onClick={() => deleteAccount(value)}>
                      删除账号
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                权限：
                <Checkbox onChange={(e) => onChange(e, value)}>
                  商品管理
                </Checkbox>
              </Col>
            </Row>
          </List.Item>
        ))}
      </List>
    </section>
  );
};

export default AccountTable;
