import { List, Button, Checkbox, message, Modal, Row, Col } from 'antd';
import CusModal from '@comp/Modal';

const AccountTableHeader = () => (
  <Row justify="space-around">
    <Col className="flex-1">账号</Col>
    <Col className="flex-1">操作</Col>
    <Col className="flex-1">权限</Col>
  </Row>
);

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
      <List header={<AccountTableHeader />} bordered itemLayout="vertical">
        {dataSource.map((value) => (
          <List.Item key={value.account}>
            <Row className="flex-1" justify="space-around">
              <Col className="flex-1">{value.account}</Col>
              <Col className="flex-1">
                <Row>
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
              <Col className="flex-1">
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
