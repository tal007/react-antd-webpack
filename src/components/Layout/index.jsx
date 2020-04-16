// import Header from '@comp/Header';

class Layout extends React.Component {
  render() {
    return (
      <section className="layout">
        {/* <Header /> */}
        {this.props.children}
      </section>
    );
  }
}

export default Layout;
