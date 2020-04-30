import './index.less';
import { useState } from 'react';
import { Input, Button, message, PageHeader } from 'antd';

function isEmpty(str) {
  return str.toString().trim().length === 0;
}

function checkRule(str) {
  const reg = /^\S{6,20}$/;
  return !reg.test(str);
}

const AddAccount = () => {
  const [account, setaccount] = useState('');
  const [password, setpassword] = useState('');
  const [passwordsure, setpasswordsure] = useState('');

  function handleSubmit() {
    if (isEmpty(account)) {
      message.error('请输入账号');
      return;
    }

    if (isEmpty(password)) {
      message.error('请输入密码');
      return;
    }

    if (isEmpty(passwordsure)) {
      message.error('请输入确认密码');
      return;
    }

    if (checkRule(account) || checkRule(password) || checkRule(passwordsure)) {
      message.error('账号/密码不符合规则。');
      return;
    }

    if (password !== passwordsure) {
      message.error('两次输入密码有误。');
      return;
    }

    console.log(account);
    console.log(password);
    console.log(passwordsure);
  }

  return (
    <section className="add-account">
      <PageHeader title="添加账号" className="module-header" />
      <div className="account">
        <Input
          prefix="账号："
          onChange={(e) => setaccount(e.target.value)}
          placeholder="请输入账号"
          allowClear
        />
        <p className="add-account-tip">必须是6-20个英文字母、数字或符号</p>
      </div>
      <div className="password">
        <Input.Password
          prefix="密码："
          onChange={(e) => setpassword(e.target.value)}
          placeholder="请输入密码"
          allowClear
        />
      </div>
      <div className="password-sure">
        <Input.Password
          prefix="确认密码："
          onChange={(e) => setpasswordsure(e.target.value)}
          placeholder="请确认账号"
          allowClear
        />
        <p className="add-account-tip">必须是6-20个英文字母、数字或符号</p>
      </div>

      <div className="submit-container">
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </div>
    </section>
  );
};

export default AddAccount;
