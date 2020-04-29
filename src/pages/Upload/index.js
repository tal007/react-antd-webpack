import { useState } from 'react';
import { Upload, Button, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default () => {
  const [fileList, setFileList] = useState([]);

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onRemove(file) {
      Modal.confirm({
        onOk() {
          console.log('file', file);
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        },
      });
      return false;
    },
    beforeUpload(file) {
      setFileList([...fileList, file]);
      return false;
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const props2 = {
    onRemove(file) {
      Modal.confirm({
        onOk() {
          console.log('file', file);
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        },
      });
      return false;
    },
    fileList,
  };

  function addFile() {
    Modal.confirm({
      title: '添加文件',
      content: (
        <Upload {...props}>
          <Button>Add</Button>
        </Upload>
      ),
      onOK() {},
    });
  }

  return (
    <div>
      <Button onClick={addFile}>
        <UploadOutlined />
        Click to Upload
      </Button>
      <Upload {...props2} />
    </div>
  );
};
