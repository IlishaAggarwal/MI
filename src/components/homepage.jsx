import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Vision } from "./vision";
import { About } from "./about";
import { Model } from "./model";
import { Payment } from "./payment";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data.json";

export const HomePage = () => {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
    return (
      <div>
        <Navigation />
      <Header data={landingPageData.Header} />
      <Vision data={landingPageData.Vision} />
      <About data={landingPageData.About} />
      <Model data={landingPageData.Model} />
      <Payment data={landingPageData.Payment} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      </div>
    )
  }