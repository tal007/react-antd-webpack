import './index.less';
import { useState } from 'react';
import { PageHeader, Input, Button, Row, Col, Divider, message } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import AccountTabele from './AccountTable';

const Authority = () => {
  const [inputValue, setinputValue] = useState('');

  function addAccount() {
    message.info('添加账号');
  }

  function searchAccount() {
    if (inputValue.trim().length) {
      message.info(inputValue);
    } else {
      message.info('请输入你要搜索的内容');
    }
  }
  return (
    <section className="authority-control">
      <PageHeader title="权限管理" className="module-header" />
      <section className="search-container">
        <Row>
          <Col offset={1}>查询</Col>
        </Row>
        <Divider style={{ margin: '10px 0', background: '#ccc' }} />
        <Row justify="space-between">
          <Col xs={{ span: 17, offset: 1 }} sm={{ span: 20, offset: 1 }}>
            <Row align="middle">
              <Col xs={{ span: 0 }} sm={{ span: 2 }}>
                <span>账号：</span>
              </Col>
              <Col xs={{ span: 22 }} sm={{ span: 18 }}>
                <Input
                  placeholder="可通过账号搜索"
                  className="input"
                  onChange={(e) => setinputValue(e.target.value)}
                  prefix={<SearchOutlined />}
                  style={{ maxWidth: 400 }}
                />
              </Col>
            </Row>
          </Col>
          <Col pull={1}>
            <Button onClick={searchAccount}>查询</Button>
          </Col>
        </Row>
      </section>

      {/* 账号 */}
      {/* 添加账号 */}
      <section className="add-account-btn">
        <Button onClick={addAccount}>添加账号</Button>
      </section>
      {/* 账号列表 */}
      <section className="account-list">
        <AccountTabele />
      </section>
    </section>
  );
};

export default Authority;
