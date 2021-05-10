import React, { Component } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div className="container">
        <Header>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          <Jumbotron />
        </Header>
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
