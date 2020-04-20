import Footer from '@comp/Footer';
import { useRef } from 'react';
import { Input, Card, Button, PageHeader } from 'antd';

const Home = () => {
  const inputNode = useRef('');

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
