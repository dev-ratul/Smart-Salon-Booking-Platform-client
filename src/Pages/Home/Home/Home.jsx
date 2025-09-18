import React from "react";
import Banner from "./Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PopulerService from "../PopulerService/PopulerService";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import RecommendedServices from "../RecommendedServices/RecommendedServices";
import TopDeals from "../TopDeals/TopDeals";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopulerService></PopulerService>
      <TopDeals></TopDeals>
      <SpecialOffer></SpecialOffer>
      <RecommendedServices></RecommendedServices>
      <HowItWorks></HowItWorks>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
