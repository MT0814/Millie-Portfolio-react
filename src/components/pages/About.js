import React from 'react';

export default function About() {
  return (

    <div className='container-fluid about-text pt-5 mb-5' >
      <div className='row' >
        <div className='col-lg-6 col-sm-12'>
          {/* <h1 className='h1 text-center'>About Me</h1> */}
          <img className='img-fluid p-3 rounded' src={require("../../image/millie.gif")} width={'100%'} alt="millie"></img>
        </div >
        <div className='col-lg-6 col-sm-12' >
          <p className='about-p text-center'>
            8 years of experience in product design, software development, project management and
            business development. Worked cross-functionally to guide products from ideation to launch by connecting the
            technical and business worlds. Well-organized, clear communicator, strong time-management, and
            leadership skills to drive product development with SCRUM framework (Agile development).
            An experienced app designer and good storyteller who has great imaginative power and passion to
            innovate the pleasant products to delight users. Designed <a href="https://www.asus.com/ca-en/site/2-in-1/asus-transformer-book/
            " target="_blank" rel="noreferrer">ASUS Transformer Tablet</a>, <a
              href="https://www.asus.com/us/Mobile/Phones/ZenFone/" target="_blank" rel="noreferrer">Zenfone</a>, <a href="https://www.cmcm.com/en/clean-master
              " target="_blank" rel="noreferrer">Clean Master app </a>which has over <span class="highlight">40 millions </span>
            users globally. <br></br><br></br><br></br><span className='quoate'>"We're just enthusiastic about what we do."<br></br> --Steve Jobs</span>
          </p>
        </div >
      </div >






    </div >




  );
}

// carousel
/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("../../image/chef.jpg")} className="d-block w-100" alt="chef"></img>
      <a href="https://chef-recipe-1.herokuapp.com/" target="_blank"><button type="button" className="btn btn-light">Chef
        Recipe</button></a>
    </div>
    <div className="carousel-item">
      <img src={require("../../image/gamers.jpg")} className="d-block w-100" alt="gaming platform"></img>
      <a href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank"><button type="button"
        className="btn btn-light">Gaming Platform</button></a>
    </div>
    <div className="carousel-item">
      <img src={require("../../image/rain.jpg")} className="d-block w-100" alt="rain"></img>
      <a href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank"><button type="button"
        className="btn btn-light btn-lg">Weather App</button></a>
    </div>
  </div >
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div > */