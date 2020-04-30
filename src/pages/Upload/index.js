import { Upload, Button, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
      uploading: false,
    };

    this.modalUploadProps = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
    };

    this.uploadNode = React.createRef();
  }

  handleUpload = () => {
    const THIS = this;
    const { fileList } = this.state;
    const file = fileList[fileList.length - 1];
    file.status = 'uploading';
    console.log(fileList);
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    axios({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      onUploadProgress(e) {
        console.log(e);
        file.status = 'uploading';
        const percent = (e.loaded / e.total) * 100;
        file.percent = percent;
        THIS.uploadNode.current.onChange({
          file,
          fileList,
          event: e,
        });
      },
    })
      .then(() => {
        this.setState({
          fileList: [],
        });
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        this.setState({
          uploading: false,
        });
      });
  };

  addFile = () => {
    const THIS = this;
    Modal.confirm({
      title: '添加文件',
      content: (
        <Upload {...this.modalUploadProps}>
          <Button>Add</Button>
        </Upload>
      ),
      okText: '上传',
      onOk() {
        THIS.handleUpload();
      },
    });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div>
        <Button onClick={this.addFile}>
          <UploadOutlined />
          Select File
        </Button>
        <Upload {...props} ref={this.uploadNode} />
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    );
  }
}

export default Demo;
