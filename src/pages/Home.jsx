

import React from "react";
import Hero from "../components/Hero";
import InsightsTools from "../components/InsightsTools";
import FeaturedProjects from "../components/FeaturedProjects";
import NewsViews from "../components/NewsViews";
import CityGrid from "../components/CityGrid";
import SocialMediaFeed from "../components/SocialMediaFeed";

export default function Home() {
  return (
    <>
      <Hero />

      <InsightsTools />
      <FeaturedProjects />
            <CityGrid />
      <NewsViews />
      <SocialMediaFeed />
    </>
  );
}
