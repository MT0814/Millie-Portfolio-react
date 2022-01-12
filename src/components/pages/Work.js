import React from 'react';

export default function Work() {
  return (
    <div className="container work-area">
      <h1>My Work</h1>
      {/* <h3 id="work">My Work</h3> */}
      <div className="row mt-5 purple">
        <div className="col-md-8">
          <a href="https://minibot-tech.herokuapp.com/" target="_blank"><img src={require("../../image/minibot-tech.png")}
            alt="minibot" className="image"></img></a>
        </div>
        <div className="vert-center col-md-4 mt-3">
          <a className="text" href="https://minibot-tech.herokuapp.com/" target="_blank">
            <h5>Minibot Tech Blog<a href="https://github.com/MT0814/14-MVC-Tech-Blog" target="_blank"><i
              className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a><br /><br /><span
                className="tech-text">CSS/ JavaScript/
                MySQL/ MVC</span>
              <p className="lead mt-2">Welcome to post or comment on any bot-related news here!</p>
            </h5>
          </a>
        </div>
      </div>
      <div className="row-r mt-5">
        <div className="vert-center col-md-4 mt-3">
          <a className="text" href="https://chef-recipe-1.herokuapp.com/" target="_blank">
            <h5>Chef Recipe<a href="https://github.com/MT0814/Chef-Recipe" target="_blank"><i
              className="fa fa-github gicon" aria-hidden="true"
              style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/ JavaScript/
                MySQL/ MVC</span>
              <p className="lead mt-2">Easy, simple, tasty recipes on one click. Welocme to share and save
                your scrumptious
                recipes with others!</p>
            </h5>
          </a>
        </div>
        <div className="col-md-8">
          <a href="https://chef-recipe-1.herokuapp.com/" target="_blank"><img src={require("../../image/chef-recipe.png")}
            alt="recipe" className="image"></img></a>
        </div>
      </div>
      <div className="row mt-5 purple">
        <div className="col-md-8">
          <a href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank"><img src={require("../../image/gaming-platform.png")} alt="gaming" className="image"></img></a>
        </div>
        <div className="vert-center
    col-md-4 mt-3">
          <a className="text" href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank">
            <h5>Gaming Platform<a href="https://github.com/MT0814/Project-1_focus-gaming-platform"
              target="_blank"><i className="fa fa-github gicon"
                style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/
                  JavaScript/ FreetoGame APIs/ Pokémon APIs</span>
              <p className="lead mt-2">A free ultimate list of Cross-Platform games. Play and save to Favorite
                whenever you
                want.</p>
            </h5>
          </a>
        </div>
      </div>
      <div className="row-r mt-5">
        <div className="vert-center col-md-4 mt-3">
          <a className="text" href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank">
            <h5>Weather Dashboard<a href="https://github.com/MT0814/Week6-Weather-dashboard" target="_blank"><i
              className="fa fa-github gicon" aria-hidden="true"
              style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/ JavaScript/
                OpenweatherAPIs</span>
              <p className="lead mt-2">Check the weather for your current location or in other places. You can
                view the
                upcoming hourly and 5-day forecast.</p>
            </h5>
          </a>
        </div>
        <div className="col-md-8">
          <a href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank"><img src={require("../../image/weather.png")}
            alt="weather" className="image"></img></a>
        </div>
      </div>
      <div className="row mt-5 purple">
        <div className="col-md-8">
          <a href="https://mt0814.github.io/Week4-HW-Code-Quiz/" target="_blank"><img src={require("../../image/code.png")}
            alt="codequiz" className="image"></img></a>
        </div>
        <div className="vert-center col-md-4 mt-3">
          <a className="text" href="https://mt0814.github.io/Week4-HW-Code-Quiz/" target="_blank">
            <h5>Code Quiz<a href="https://github.com/MT0814/Week4-HW-Code-Quiz" target="_blank"><i
              className="fa fa-github gicon" aria-hidden="true"
              style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/
                JavaScript</span>
              <p className="lead mt-2">There are some simple coding questions. Try and see what the highest
                score that you can
                get.</p>
            </h5>
          </a>
        </div>
      </div>
      {/* <div className="row-r mt-5">
        <div className="vert-center col-md-4 mt-3">
          <a className="text" href="https://mt0814.github.io/Week5-Work-Day-Scheduler/" target="_blank">
            <h5>Day Scheduler<a href="https://github.com/MT0814/Week5-Work-Day-Scheduler" target="_blank"><i
              className="fa fa-github gicon" aria-hidden="true"
              style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/ JavaScript/
                moment.js</span>
              <p className="lead mt-2">You can create events here to remind you of a day scheule.</p>
            </h5>
          </a>

          <div className="col-md-8">
            <a href="https://mt0814.github.io/Week5-Work-Day-Scheduler/" target="_blank"><img src={require("../../image/scheduler.png")} alt="scheduler" className="image"></img></a>
          </div>
        </div>
      </div> */}

    </div>

  );
}   
