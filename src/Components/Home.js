import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Inspired by your Wish List ......"
            price={599.96}
            rating={5}
            image="https://ik.imagekit.io/amazon1234/tab10_dcLpRR5LD.jpg?updatedAt=1627118739258"
          />
          <Product
            id="49538094"
            title="Festive latest launches"
            price={1015.0}
            rating={4}
            image="https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Up to 70% off | Electronics clearance store"
            price={1094.99}
            rating={3}
            image="https://ik.imagekit.io/amazon1234/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__nBkAcb2wW.jpg?updatedAt=1627731880089"
          />
          <Product
            id="23445931"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2.jpg"
          />
          <Product
            id="3254354346"
            title="Inspired by your Wish List"
            price={598.99}
            rating={4}
            image="https://ik.imagekit.io/amazon1234/tab8_oJnWNwvIX.jpg?updatedAt=1627118746586"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Ethiopian Christian art Christ in Glory Ethiopian Cross T-Shirt"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91Etdp5vzbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          />
          <Product
            id="4"
            title="I got this book as a gift for my father and therefore have not read it. The cover where the lion is, is very blurry which was weird to me. Also I looked at the last page of the book and it says made in the USA in Texas which I thought was very strange since it's being marketed that it's from the Ethiopian Church.. "
            price={110.25}
            rating={5}
            image="https://m.media-amazon.com/images/I/71kSg0uFZVL._AC_UL400_.jpg"
          />
          <Product
            id="5"
            title="1.7'' Phone Smart Watch Answer/Make Calls, Fitness Watch with AI Control Call/Text, Android Smart Watch for iphone"
            price={314.01}
            rating={4}
            image="https://m.media-amazon.com/images/I/712+lS1mk-L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="DINGKUAKE for iPhone 12 Pro Max Case Magsafe, Magnetic Clear Phone Case with Screen Protector and Camera Cover..."
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81KC9v+CJpL._AC_SL1500_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 50' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61xdVaWsMDL._AC_SL1001_.jpg"
          />
          <Product
            id="90829332"
            title="Acer Chromebook Spin 311 Convertible Laptop ....."
            price={1005.98}
            rating={4}
            image="	https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 50' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1990.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
