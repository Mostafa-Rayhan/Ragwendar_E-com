import React from 'react'

import Banner from '../components/banner';
import Section1 from '../components/section1';
import BestSeller from '../components/bestSeller';
import LittleBanner from '../components/littleBanner';
import PopularCatagories from '../components/popularCatagories';
import Discount from '../components/discount';
import OfferSlider from '../components/offerSlider';
import BannerFull from '../components/bannerFull';
import BestSellerMen from '../components/bestSellerMen';
import BestSellerSlider from '../components/bestSellerSlider';
import Banner2 from '../components/banner2';
import DailyDrops from '../components/dailyDrops';
import Banner3 from '../components/banner3';
import Banner4 from '../components/banner4';

const Index = () => {
  return (
    <div>
      <Banner />
      <Section1 />
      <BestSeller />
      <LittleBanner />
      <PopularCatagories />
      <Discount />
      <OfferSlider />
      <BannerFull />
      <BestSellerMen />
      <BestSellerSlider />
      <Banner2 />
      <DailyDrops />
      <Banner3 />
      <Banner4 />
    </div>
  )
}

export default Index