import '@styl/common.less';
import { hot } from 'react-hot-loader';
import Header from '@comp/Header';
import Footer from '@comp/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  addCount() {
    // this.setState(({count}) => {
    //   return {
    //     count: count + 1
    //   }
    // });
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  
  render() {
    return (
      <div>
        <Header />
        {/* <h1>React App.</h1> */}
        <p>{this.state.count}</p>
        <button type="button" onClick={this.addCount.bind(this)}>Add count</button>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
