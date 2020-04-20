import Header from '@comp/Header';

class Layout extends React.Component {
  render() {
    return (
      <section className="layout" style={{ margin: 20 }}>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export default Layout;
