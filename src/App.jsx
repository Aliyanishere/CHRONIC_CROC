import { useContext, useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png'
// import background from './images/bg_image11.png'
import cartoon1 from './images/cartoon1.png'
import cartoon2 from './images/cartoon2.png'
import secondBg from './images/second_bg.png'
import secondsecimg from './images/second_img.png'
import thirdimg from './images/third_image.png'
import stars from './images/stars.png'
import secondimagebg from './images/second_img_bg.png'
import thirdmagebg from './images/third_img_bg.png'

import path from './images/Path.png';
import path2 from './images/path2.png';
import croc1 from './images/croc1.png';
import croc2 from './images/croc2.png';
import croc3 from './images/croc3.png';
import croc4 from './images/croc4.png';
import croc5 from './images/croc5.png';
import croc6 from './images/croc6.png';
import croc7 from './images/croc7.png';
import croc8 from './images/croc8.png';
import croc9 from './images/croc9.png';
import croc10 from './images/croc10.png';
import croc11 from './images/croc11.png';
import croc12 from './images/croc12.png';
import croc13 from './images/croc13.png';
import croc14 from './images/croc14.png';
import croc15 from './images/croc15.png';
import crocy from './images/crocs.gif';
import imgi1 from './images/imgi1.jpeg';
import imgi2 from './images/imgi2.jpeg';
import imgi3 from './images/imgi3.jpeg';
import imgi4 from './images/imgi4.jpeg';
import imgi5 from './images/imgi5.jpeg';
import imgi6 from './images/imgi6.jpeg';
import imgi7 from './images/imgi7.jpeg';
import imgi8 from './images/imgi8.jpeg';
import imgi9 from './images/imgi9.jpeg';
import imgi10 from './images/imgi10.jpeg';
import imgi11 from './images/imgi11.jpeg';
import imgi12 from './images/imgi12.jpeg';
import imgi13 from './images/imgi13.jpeg';
import imgi14 from './images/imgi14.jpeg';
import imgi15 from './images/imgi15.jpeg';
import imgi16 from './images/imgi16.jpeg';
import imgi17 from './images/imgi17.jpeg';
import imgi18 from './images/imgi18.jpeg';
import imgi19 from './images/imgi19.jpeg';
import imgi20 from './images/imgi20.jpeg';
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import team3 from './images/team3.png';
import team4 from './images/team4.png';
import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'


function App() {

  const [days, setGet_days] = useState(0);
  const [get_hours, setGet_hours] = useState(0);
  const [get_min, setGet_min] = useState(0);
  const [get_sec, setGet_sec] = useState(0);

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      setGet_days(Math.floor(distance / (day)));
      setGet_hours(Math.floor((distance % (day)) / (hour)));
      setGet_min(Math.floor((distance % (hour)) / (minute)));
      setGet_sec(Math.floor((distance % (minute)) / second));

      //do something later when date is reached
      if (distance < 0) {
        clearInterval(x);
      }
      //seconds
    }, 1000)


  function ContextAwareToggle({ children, eventKey, callback }) {


    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        className="acc-toggler"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        {isCurrentEventKey ? <i class="fas fa-minus" style={{ marginRight: "25px", color: "#148dea" }}></i> : <i class="fas fa-plus" style={{ marginRight: "25px", color: "white" }}></i>}
      </button>
    );
  }


  return (
    <div className="App">

      <section className='Header_section'>
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <img width="100px" src={logo} alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars fs-1" style={{ color: "#02cc82" }}></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#mint">Mint</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#rarity">Rarity</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#roadmap">Roadmap</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#faq">FAQs</a>
                </li>

              </ul>
              <a href="https://discord.com/invite/rXtJ98ka" target="_blank"><i className="fab fa-discord fs-4 mx-3 text-white"></i></a>
              <a href="https://twitter.com/ChronicCrocs" target="_blank"><i className="fab fa-twitter fs-4 mx-3 text-white"></i></a>
              <a href="https://instagram.com/chroniccrocs?utm_medium=copy_link" target="_blank"><i className="fab fa-instagram fs-4 mx-3 text-white"></i></a>
            </div>
          </div>
        </nav>

        <div className="container-fluid" id='home'>
          <div className="row mx-0">
            <div className="col-lg-4 ">
            </div>
            <div className="col-lg-4 text_col text-center">
              <h1 className='text-white fw-boler my-4'>GO LIVE IN <br /> <span className='span_text'>{days}:{get_hours}:{get_min}:{get_sec}</span> </h1>
            </div>
            <div className='' style={{ marginTop: "-130px" }} >
              <button className='for_box_shadow btn btn-dark live_btn'>Mint</button>
            </div>
            <div className="col-lg-4">
            </div>
          </div>
        </div>

      </section>


      <section className='second_section' id='mint'>
        <div className="container-fluid ">
          <div className="row mx-0">
            <div className="col-lg-6 col-sm-12  mt-5">
              <div className="container text-lg-start text-sm-center text_section ">
                <h2 className='fw-bold fs-1' style={{ color: "#02cc82" }}>CLAIM YOUR CHRONIC CROC</h2>
                <p className='text-white'>Chronic Crocs is a unique collection of 1,000 NFTs designed by hand for anyone and everyone. The Chronic Crocs have found a home in the metaverse where they can all vibe, hangout, and be who they are. These Crocs are going to be the first of their kind and are guaranteed to have the chillest smoke spots in all of the metaverse. The presale will be at 4/20/2022 at 4:20 pm PST / 7:20 pm EST. The public sale will be at 4/21/2022 at 4:20 pm PST / 7:20 pm EST.</p>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='btn_custom'>
                    <button className='btn btn-dark live_btn'>MINT NOW &nbsp;<i className='fas fa-arrow-right'></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  bg_second_img    ">
              <div className="container  px-0  d-flex justify-content-center align-items-start">
                <img className='Second_img w-50 for_box_shadow ' src={crocy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='third_section' id='about'>

        <div className="container ">
          <div className="row my-lg-5 justify-content-center">
            <div className="col-md-11 text-center my-5">
              <h1 className='fw-bold fs-1' style={{ color: "#02cc82" }}>THE CHRONIC CROCS</h1>
              <p className='text-white mt-3 '>An unfiltered space, to bring together all people who love participating in the great joy of the mary jane. This community will be the hangout place for all drug related conversations. High as hell and paranoid? Come here and talk through your thoughts! Want to discuss the best crypto coin or the next new 100x NFT? We got you! This is a safe place to do whatever the heck you want. Say whatever you want. Be whatever you want.
                “Potheads are poor low lifes” Lets change that! We want to make as many people rich as we can. Its lonely at the top unless you bring everyone with you! LETS GET RICH! We have a finance section where we can all come together and make everyone money. The next 100x NFT project specifically for this community below. Because what are the Chronic Crocs?
                1000 Completely Zooted Crocs went walking through the metaverse, exploring and searching for the ultimate smoke spot to chill, hangout with each other, and find swamps surrounded by the most potent green kush. Years later, they were tired of searching so they decided to create their own spot. The Chronic Crocs Cannabis Club. This club is a safe place to grow unlimited weed, create smoke spots with good vibes, storefronts to grow your business, or whatever their high minds can dream up. They can discuss the possibility of alien life, find the next best crypto coin, freestyle rap, and make friends who respect the ways of Cheech and Chong.
                The metaverse needs a Cannabis Club and the Chronic Crocs will be the creators, the dealers, and of course the tokers. Each Croc will have the power to create their own smoke spot and have the ability to sell weed to other NFTs who will be able to come and safely smoke in the club.
                The ultimate smoke spot and hangout space.</p>
              <div className=' d-flex justify-content-center align-items-center'>
                {/* <div className='btn_custom '>
                  <button className='btn px-4 btn-dark btn_custom_2' >LOREM IPSUM <i className='fas fa-arrow-right'></i></button>

                </div> */}

              </div>
            </div>
          </div>
        </div>

      </section>


      <section className='Fourth_section' id='rarity'>
        <div className="container-fluid px-0 ">
          <div className="row mx-0">

            <div className="col-lg-5  bg_second_img bg_stars">
              <div className="container text-center">
                <img className='third_img img-fluid for_box_shadow w-75 ' src={crocy} alt="" />
              </div>

            </div>

            <div className="col-lg-4 my-3 text-lg-start text-sm-center text_section">
              <h1 className='fw-bold fs-1' style={{ color: "#02cc82" }}>RARITY</h1>
              <h3 className='text-white my-3'>STATISTICS</h3>


              <div class="progress my-3 ">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

              </div>


              <h5 className='text-primary fs-9'>CHRONIC CROCS:  <span className='text-white'> 1000</span> </h5>
              <h5 className='text-primary fs-9'>PRESALE COST: <span className='text-white'> 0.05 ETH</span> </h5>
              <h5 className='text-primary fs-9'>SALE COST: <span className='text-white'> 0.06 ETH</span> </h5>
            </div>

            <div className="col-lg-3 col-12 text-lg-start text-sm-center text_section" style={{ marginTop: "70px" }}>
              <h3 className='text-white'>TRAITS</h3>
              {/* <h5 className='text-primary'>SUPER RARE : <span className='text-white'> 8</span> </h5> */}
              <h5 className='text-primary'>HATS : <span className='text-white'>6</span> </h5>
              <h5 className='text-primary'>EYES : <span className='text-white'>6</span> </h5>
              <h5 className='text-primary'>SMOKING UTENSILS :<span className='text-white'>6</span> </h5>
              <h5 className='text-primary'>CLOTHES :  <span className='text-white'>11</span> </h5>
              <h5 className='text-primary'>SKIN : <span className='text-white'>6</span>  </h5>
              <h5 className='text-primary'>ACCESSORIES : <span className='text-white'>4</span> </h5>
              <h5 className='text-primary'>BACKGROUND : <span className='text-white'>6</span> </h5>
              <h5 className='text-primary'>EXPRESSIONS : <span className='text-white'>6</span> </h5>

            </div>
          </div>

        </div>

      </section>

      {/* roadmap section */}
      <div className='roadmap' id='roadmap'>
        {/* <div className='leaves'> */}
        <div className='m-2 d-flex align-items-center flex-column bg-transparent'>
          <p className='mb-0 roadmap_head fw-bold' style={{ color: "#02cc82" }}>Roadmap</p>

          <div className="road-line-parent d-flex flex-column mb-5">
            <div className="row mx-0 mt-5 ms-lg-5 ms-md-5 future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>
              </div>
              <div className="col-lg-6 col-12 d-flex align-items-start padding-start-road  " style={{ backgroundColor: "transparent" }}>
                {/* <span className='road-line mt-4'></span> */}
                <div className="d-flex flex-column" style={{marginTop: "-20px"}}>
                  <p className='text-start mb-0' style={{ backgroundColor: "transparent", color: "#02cc82" }}>40% - Member prize giveaways</p>
                  <p className='mb-0 text-start col-lg-10 col-12 mb-1'>All members will get raffle tickets to enter to win prizes such as an illadelph bong
                    potentially worth up to $5,000!!</p>
                  <p className='mb-0 text-start col-lg-8 col-12' style={{ backgroundColor: "transparent", color: "#02cc82" }}>50% - Drop more Zooted NFTs that will have specific roles/powers in the club</p>
                  <p className='mb-0 text-start col-12'>We are here to stay and want this community to grow and forever change! At this mark
                    we will drop more completely zoinked characters that will hold special powers such as
                    being able to create their own weed strain, mutate, and breed with other character</p>
                </div>
              </div>
            </div>

            <div className="row mx-0 mt-5 mt-lg-0 me-lg-5 me-md-5 future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 col-12 d-flex align-items-end flex-column padding-end-road" style={{ backgroundColor: "transparent" }}>
                <p className='text-end' style={{ backgroundColor: "transparent", color: "#02cc82" }}>60% - Donate to help fight for legalization to show how medical marijuana and CBD can
                  help fight cancer such as Osteosarcoma</p>
                <p className='mb-0 text-end col-lg-9 col-12'>Osteosarcoma, Alzeihmers, and Neuropathic pain are all diseases treatable with the
                  healing powers of marijuana. However because this powerful medicine is not legal,
                  studies cannot be legally conducted and the true power of this plant cannot be
                  uncovered.
                </p>
              </div>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>
              </div>
            </div>

            <div className="row mx-0 mt-5 me-lg-5 me-md-5 future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 col-12 d-flex align-items-end flex-column padding-end-road" style={{ backgroundColor: "transparent" }}>
                <p className='text-end' style={{ backgroundColor: "transparent", color: "#02cc82" }}>70% - Chronic Crocs Merch Drop</p>
                <p className='mb-0 text-end col-lg-8 col-12'>The Metaverse is the future but let's be able to represent our Croc in real life! Chronic
                  Crocs Merch will allow members to get custom shwag from the highest quality of
                  products and profits will be directly invested to keep this project going.
                </p>
              </div>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>
              </div>
            </div>

            <div className="row mx-0 mt-5 mt-lg-0 ms-lg-5 ms-md-5 future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>
              </div>
              <div className="col-lg-6 col-12 d-flex align-items-start padding-start-road flex-column" style={{ backgroundColor: "transparent" }}>
                <p className='text-start' style={{ backgroundColor: "transparent", color: "#02cc82" }}>80% - Chronic Coin Creation</p>
                <p className='mb-0 text-start col-lg-9 col-12'>This project is completely decentralized and members will have the power to drive how
                  the future of the Cannabis Club will unfold. Voting is purely restricted to Chronic Crocs
                  and all metrics will be open sourced for the public to see.</p>
              </div>
            </div>

            <div className="row mx-0 mt-5 mt-lg-0 me-lg-5 me-md-5 future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 col-12 d-flex align-items-end flex-column padding-end-road" style={{ backgroundColor: "transparent" }}>
                <p className='text-end' style={{ backgroundColor: "transparent", color: "#02cc82" }}>100% - The Cannabis Club Metaverse to be created allowing other NFTs to come in and
                  enjoy a safe place to smoke the mary jane</p>
                <p className='mb-0 text-end col-lg-9 col-12'>Wow everyone we made it happen. The Cannabis Club is officially ready. The Chronic
                  Crocs will be the first members to have access and the ability to truly create a universe
                  of their own. The Cannabis Club.</p>
              </div>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>
              </div>
            </div>
            <div className="path d-lg-flex d-none">
              <img src={path2} alt="" width="280px" style={{ backgroundColor: "transparent" }} />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* Gallery */}
      <div className='lorem'>
        <div className='m-5' style={{ backgroundColor: "transparent" }}>
          <h1 className='mb-4 roadmap_head fw-bold' style={{ color: "#02cc82" }}>GALLERY</h1>
          <div className='croc_imgs d-flex justify-content-center align-items-center flex-wrap' style={{ backgroundColor: "transparent" }}>
            <img src={imgi1} alt="" width="230px" height="230px" />
            <img src={imgi2} alt="" width="230px" height="230px" />
            <img src={imgi3} alt="" width="230px" height="230px" />
            <img src={imgi4} alt="" width="230px" height="230px" />
            <img src={imgi7} alt="" width="230px" height="230px" />
            <img src={imgi6} alt="" width="230px" height="230px" />
            <img src={imgi9} alt="" width="230px" height="230px" />
            <img src={imgi12} alt="" width="230px" height="230px" />
          </div>
        </div>
      </div>

      {/* team section */}
      <div className='team mb-0'>
        <div className='m-5 mb-0' style={{ backgroundColor: "transparent" }}>
          <h1 className='mb-4 roadmap_head fw-bold' style={{ color: "#02cc82" }}>OUR TEAM</h1>
          {/* <p className='fs-6 mb-0' style={{ color: "white", backgroundColor: "transparent" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> odit voluptatum dolor repellat iure ullam officia excepturi voluptate consequatur</p> */}
        </div>
        <div className='team_imgs_sec p-5 mt-0'>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "transparent" }}>
            <img className='team_imgs' src={croc11} alt="" />
            <div className='name_box mx-2'>
              <p className='mb-3 fs-6'>CEO/Graphic Artist</p>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "transparent" }}>
            <img className='team_imgs' src={croc12} alt="" />
            <div className='name_box mx-2'>
              <p className='mb-3 fs-6'>Graphic Artist</p>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "transparent" }}>
            <img className='team_imgs' src={croc13} alt="" />
            <div className='name_box mx-2'>
              <p className='mb-3 fs-6'>Developer</p>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "transparent" }}>
            <img className='team_imgs' src={croc14} alt="" />
            <div className='name_box mx-2'>
              <p className='mb-3 fs-6'>Marketing Manager</p>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "transparent" }}>
            <img className='team_imgs' src={croc15} alt="" />
            <div className='name_box mx-2'>
              <p className='mb-3 fs-6'>Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="container container">
        <span id='faq' className="container d-flex justify-content-start align-items-center fs-1 fw-600" style={{ color: "#148dea", marginTop: "100px", color: "#02cc82" }}>FAQs</span>
      </div>
      <section className="container d-flex justify-content-start align-items-center my-5" >
        <Accordion className='w-100'>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
              <div className="mb-0">What is the purpose of this project?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0 ms-0" >The purpose of this project is to LEGALIZE MARIJUANA so that we can all get HIGH
                ASF…. KIDDING! Actually, the main goal of this project is to spread awareness, donate
                to help legally study the medical benefits of weed, and make it where we can all make
                money together! As many of you know CBD helps with anxiety and depression and has
                even shown links to help fight cancer and Alzheimer's. The project is going to contribute
                to research in the medical marijauana industry, which could change the future of
                medicine and hopefully make this whole community money along the way!
              </span>  </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
              <div className="mb-0">How Many Chronic Crocs are there?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >The Cannabis club will first be open to 1,000 unique NFT’s. Ownership of these NFT’s
                will always be found on the ethereum network and once you own it, it is yours and only
                yours! Once 50% are sold we will start to unfold the other 9 collections for a total of
                10,000 unique NFTS!
              </span>  </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
              <div className="mb-0">Why are there only 1,000 Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >The Chronic Crocs are not for profit and we want to show you that! The purpose is to
                build a community, donate for a common cause, and also create a kick ass awesome
                location where like minded people can chill, talk, and just overall vibe with each other.
                We will create 9 other collections for a total of 10,000 original members as our
                community grows!</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
              <div className="mb-0">Who is the team behind Chronic Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >The main team behind Chronic Crocs is a group of five skilled collaborators who all
                bond over the love of Mary Jane and the culture that comes with it. We have two
                graphic artists, one developer, a marketing manager, and a head of operations.</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
              <div className="mb-0">Can I trade or sell my Chronic Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >Absolutely! This is your Croc and you can sell it or trade it on an open marketplace like
                Open Sea.</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
              <div className="mb-0">Will you be able to breed/mutate the Crocs?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >Yes!! That is the benefit of having 10 total collections to mix and match. This is part of
                our future plan and since the Crocs are a DAO, you will actually get to help us finalize
                this plan and let us know exactly what you want!</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center">
              <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              <div className="mb-0">Is this a Metaverse Project?</div>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="ans"> <span className="ps-lg-5 ps-0" >You bet your ass it is! The Chronic Crocs Cannabis Club will be a metaverse where you
                can build your own smoke spot, buy and sell real estate, art, cannabis or really anything
                you can create! It will be a completely hyper realistic, finite amount of land, where the members can build spots to enjoy while smoking in virtual reality. Oh you live in middle
                America? Go enjoy a joint on the beach while you are chilling with your friends who live
                in Tokyo! Just spent 1500 hours building the most insane smoke spot ever? Now you
                can even sell it to other members! There will be areas to paint, shows to watch, and
                even Bob Marley concerts to watch high as tits! All bought and sold using the Chronic
                Crocs Cannabis Coin. This will be a complete metaverse project 100% run by its
                members. A DAO Cannabis Utopia.</span> </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>

      {/* Footer */}
      <div class="container-fluid my-5">

        <footer class="text-center text-white my-5" >
          {/* <!-- Grid container --> */}
          <div class="container pt-4 footer_container">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">

              <div class="row justify-content-center mx-0">
                <h1 class="" style={{ color: "rgb(2,204,130)", fontSize: "50px" }}>LET'S SMOKE</h1>
              </div>
              <a href="https://discord.com/invite/rXtJ98ka" target="_blank"><i className="fab fa-discord fs-2 mx-3 mt-4 text-white"></i></a>
              <a href="https://twitter.com/ChronicCrocs" target="_blank"><i className="fab fa-twitter fs-2 mx-3 mt-4 text-white"></i></a>
              <a href="https://instagram.com/chroniccrocs?utm_medium=copy_link" target="_blank"><i className="fab fa-instagram fs-2 mx-3 mt-4 text-white"></i></a>
            </section>
          </div>
          <div class="text-center text-white mb-0 fs-7" >
            COPYRIGHT RESERVED
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
