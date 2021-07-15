import React from "react";
import "./Home.css";
import Banner from "./Banner.js";
import Card from "./Card.js";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://i.insider.com/5be173cc9e8c532ef800c4e6?width=640&format=jpeg"
          title="Online Experience"
          description="Unique activity we can do together,led by a world of hosts"
        />
        <Card
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2018/08/10-airship-002-min.jpg?fit=720%2C1669"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/5f95694e-5531-4a70-bdc3-b646d436c26c.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://fabrili.com/wp-content/uploads/2020/10/Landmark-Place-London-Penthouse-5.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this Stunning Penthouse"
          price=" &euro; 130/night"
        />
        <Card
          src="https://cdn.shopify.com/s/files/1/0004/4630/0222/files/15_Luxury_Blue_Bedroom_Ideas___Blue_Bedroom_Designs___LuxDeco.com_4.jpg?v=1604405249"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beach side in sunny Bournemouth"
          price="&euro; 350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80"
          title="1 Bedroom Apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="&euro; 80/night"
        />
      </div>
    </div>
  );
}

export default Home;
