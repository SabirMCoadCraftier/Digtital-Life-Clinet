// HeroSlider.jsx
// Single-file React component (default export) that uses TailwindCSS classes.
// - Auto-plays slides
// - Keyboard & swipe friendly
// - Previous / Next controls + indicators
// - Accessible (aria) and responsive

import React from "react";
import HeroSlider from "../../Component/HeroSlider/HeroSlider";
import WhyLearningMatters from "../../Component/WhyLearningMatters/WhyLearningMatters";
import TopContributors from "../../Component/TopContributors/TopContributors";
import MostSavedLessons from "../../Component/MostSavedLessons/MostSavedLessons";
import FeaturedLessons from "../../Component/FeaturedLessons/FeaturedLessons";
import CategoriesSection from "../../Component/Categories/Categories";
import Testimonials from "../../Component/Testimonials/Testimonials";
import NewsletterSection from "../../Component/NewsletterSection/NewsletterSection";
import FAQ from "../../Component/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <FeaturedLessons></FeaturedLessons>
      <CategoriesSection></CategoriesSection>
      <WhyLearningMatters></WhyLearningMatters>
      <TopContributors></TopContributors>
      <MostSavedLessons></MostSavedLessons>
      {/* <Testimonials></Testimonials> */}
      <FAQ></FAQ>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;
