import Footer from '@comp/Footer';
import { useRef, useEffect } from 'react';
import { Input, Card, Button, PageHeader } from 'antd';
import axios from '@/http';

const Home = () => {
  const inputNode = useRef('');

  useEffect(() => {
    axios.get('common/nav').then(() => {});
    // axios.get('common/banner').then(() => {});
    axios.get('common/500').then(() => {});
    axios.get('common/400').then(() => {});
  }, []);

  function handleClick() {
    console.log(inputNode.current);
    inputNode.current.setState({ value: '' });
  }

  return (
    <div>
      <PageHeader title="Home" />
      <Card title="Input 通过事件清空内容">
        <Input ref={inputNode} placeholder="测试" />
        <Button onClick={handleClick}>点击按钮</Button>
      </Card>
      <Footer />
    </div>
  );
};

export default Home;
