import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './Footer';
// import Carousel from './Carousel';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Carousel /> */}
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <div>{renderPage()}</div>

      <Footer />
    </div>
  );
}
