import { Table, Button, Checkbox, message } from 'antd';

const dataSource = [
  {
    key: '1',
    account: '胡彦斌',
  },
  {
    key: '2',
    account: '胡彦祖',
  },
];

const columns = [
  {
    title: '账号',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '操作',
    key: 'handle',
    render: () => (
      <span>
        <Button type="link" onClick={resetPassword}>
          重置密码
        </Button>
        <Button type="link" onClick={deleteAccount}>
          删除账号
        </Button>
      </span>
    ),
  },
  {
    title: '权限',
    key: 'auth',
    render: () => <Checkbox onChange={onChange}>商品管理</Checkbox>,
  },
];

function onChange(e) {
  message.info(`checked = ${e.target.checked}`);
}

function resetPassword() {
  message.info('重置密码');
}

function deleteAccount() {
  message.info('删除账号');
}

const AccountTable = () => (
  // <Table bordered dataSource={dataSource} columns={columns} />
  <div>2132</div>
);

export default AccountTable;
