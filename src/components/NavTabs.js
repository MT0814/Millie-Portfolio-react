import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#about" onClick={() => handlePageChange('About')}>MILLIE TSAI</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <div className="icons8-menu"></div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#work"
                onClick={() => handlePageChange('Work')}
                //  TODO: Add a comment explaining what this logic is doing

                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}

export default NavTabs;
