import { useState } from 'react';
import { Upload, Button, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

export default () => {
  const [fileList, setFileList] = useState([]);

  const props = {
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
      okText: '上传',
      onOk() {
        console.log(fileList);
        handleUpload();
      },
    });
  }

  function handleUpload() {
    console.log(fileList);
    const formData = new FormData();
    fileList.forEach((file) => {
      console.log(file);
      formData.append('files[]', file);
    });

    // You can use any AJAX library you like
    axios({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      onUploadProgress(event) {
        console.log(event);
        console.log(formData);
        const { total, loaded } = event;
        const percent = (loaded / total) * 100;
      },
    })
      .then(() => {
        // setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
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
