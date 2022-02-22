import React from 'react';

export default function Work() {
  return (

    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://chef-recipe-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/chef-recipe.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title">Project 2: Chef Recipe</h5>
                <p className="card-text" >Easy, simple, tasty recipes on one click!</p >
                <p className="card-text-0" >CSS/ JavaScript/
                  MySQL/ MVC</p >
                <a href="https://github.com/MT0814/Chef-Recipe" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://minibot-tech.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/minibot-tech.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title">Minibot Tech Blog</h5>
                <p className="card-text" >Post or comment on any bot-related news here!</p >
                <p className="card-text-0" >CSS/ JavaScript/
                  MySQL/ MVC</p >
                <a href="https://github.com/MT0814/14-MVC-Tech-Blog" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >
        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://impress-me-app1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/influencer.jpeg")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Project 3: Impress ME</h5>
                <p className="card-text" >Making money by sharing what you love!</p >
                <p className="card-text-0" >Semantic UI/ MonogDB/ React</p >
                <a href="https://github.com/MT0814/Project3-meet-me" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >
        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/gaming1.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Project 1: Gaming Platform</h5>
                <p className="card-text" >Play and save games to your favorites!</p >
                <p className="card-text-0" >CSS/ JavaScript/
                  MySQL/ MVC</p >
                <a href="https://github.com/MT0814/Project-1_focus-gaming-platform" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/weather.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Weather app</h5>
                <p className="card-text" >Check the cities' weather before you go.</p >
                <p className="card-text-0" >CSS/ JavaScript/ OpenweatherAPIs</p >
                <a href="https://github.com/MT0814/Week6-Weather-dashboard" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://mt0814.github.io/Week4-HW-Code-Quiz/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/code.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Code Quiz</h5>
                <p className="card-text" >What the highest score you can get in 50sec!</p >
                <p className="card-text-0" >CSS/ JavaScript</p >
                <a href="https://github.com/MT0814/Week4-HW-Code-Quiz" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://mt0814.github.io/Week5-Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../image/scheduler.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Day Scheduler</h5>
                <p className="card-text" >Create events to remind you of a day scheule.</p >
                <p className="card-text-0" >CSS/ JavaScript/ moment.js</p >
                <a href="https://github.com/MT0814/Week5-Work-Day-Scheduler" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >


      </div >

    </div >






    //   <div className="container work-area">
    //     <h1>My Work</h1>
    //     {/* <h3 id="work">My Work</h3> */}
    //     <div className="row mt-5 purple">
    //       <div className="col-md-8">
    //         <a href="https://minibot-tech.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require("../../image/minibot-tech.png")}
    //           alt="minibot" className="image"></img></a>
    //       </div>
    //       <div className="vert-center col-md-4 mt-3">
    //         <a className="text" href="https://minibot-tech.herokuapp.com/" target="_blank">
    //           <h5>Minibot Tech Blog<a href="https://github.com/MT0814/14-MVC-Tech-Blog" target="_blank"><i
    //             className="fa fa-github gicon" style={{ fontSize: "30px" }}></i></a><br /><br /><span
    //               className="tech-text">CSS/ JavaScript/
    //               MySQL/ MVC</span>
    //             <p className="lead mt-2">Welcome to post or comment on any bot-related news here!</p>
    //           </h5>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="row-r mt-5">
    //       <div className="vert-center col-md-4 mt-3">
    //         <a className="text" href="https://chef-recipe-1.herokuapp.com/" target="_blank">
    //           <h5>Chef Recipe<a href="https://github.com/MT0814/Chef-Recipe" target="_blank"><i
    //             className="fa fa-github gicon" aria-hidden="true"
    //             style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/ JavaScript/
    //               MySQL/ MVC</span>
    //             <p className="lead mt-2">Easy, simple, tasty recipes on one click. Welocme to share and save
    //               your scrumptious
    //               recipes with others!</p>
    //           </h5>
    //         </a>
    //       </div>
    //       <div className="col-md-8">
    //         <a href="https://chef-recipe-1.herokuapp.com/" target="_blank"><img src={require("../../image/chef-recipe.png")}
    //           alt="recipe" className="image"></img></a>
    //       </div>
    //     </div>
    //     <div className="row mt-5 purple">
    //       <div className="col-md-8">
    //         <a href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank"><img src={require("../../image/gaming-platform.png")} alt="gaming" className="image"></img></a>
    //       </div>
    //       <div className="vert-center
    // col-md-4 mt-3">
    //         <a className="text" href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank">
    //           <h5>Gaming Platform<a href="https://github.com/MT0814/Project-1_focus-gaming-platform"
    //             target="_blank"><i className="fa fa-github gicon"
    //               style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/
    //                 JavaScript/ FreetoGame APIs/ Pokémon APIs</span>
    //             <p className="lead mt-2">A free ultimate list of Cross-Platform games. Play and save to Favorite
    //               whenever you
    //               want.</p>
    //           </h5>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="row-r mt-5">
    //       <div className="vert-center col-md-4 mt-3">
    //         <a className="text" href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank">
    //           <h5>Weather Dashboard<a href="https://github.com/MT0814/Week6-Weather-dashboard" target="_blank"><i
    //             className="fa fa-github gicon" aria-hidden="true"
    //             style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/ JavaScript/
    //               OpenweatherAPIs</span>
    //             <p className="lead mt-2">Check the weather for your current location or in other places. You can
    //               view the
    //               upcoming hourly and 5-day forecast.</p>
    //           </h5>
    //         </a>
    //       </div>
    //       <div className="col-md-8">
    //         <a href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank"><img src={require("../../image/weather.png")}
    //           alt="weather" className="image"></img></a>
    //       </div>
    //     </div>
    //     <div className="row mt-5 purple">
    //       <div className="col-md-8">
    //         <a href="https://mt0814.github.io/Week4-HW-Code-Quiz/" target="_blank"><img src={require("../../image/code.png")}
    //           alt="codequiz" className="image"></img></a>
    //       </div>
    //       <div className="vert-center col-md-4 mt-3">
    //         <a className="text" href="https://mt0814.github.io/Week4-HW-Code-Quiz/" target="_blank">
    //           <h5>Code Quiz<a href="https://github.com/MT0814/Week4-HW-Code-Quiz" target="_blank"><i
    //             className="fa fa-github gicon" aria-hidden="true"
    //             style={{ fontSize: "30px" }}></i></a><br /><br /><span className="tech-text">CSS/
    //               JavaScript</span>
    //             <p className="lead mt-2">There are some simple coding questions. Try and see what the highest
    //               score that you can
    //               get.</p>
    //           </h5>
    //         </a>
    //       </div>
    //     </div>


    //   </div>

  );
}   
