import React from 'react'

import Banner from '../components/indexPage/banner';
import Section1 from '../components/indexPage/section1';
import BestSeller from '../components/indexPage/bestSeller';
import LittleBanner from '../components/indexPage/littleBanner';
import PopularCatagories from '../components/indexPage/popularCatagories';
import Discount from '../components/indexPage/discount';
import OfferSlider from '../components/indexPage/offerSlider';
import BannerFull from '../components/indexPage/bannerFull';
import BestSellerMen from '../components/indexPage/bestSellerMen';
import BestSellerSlider from '../components/indexPage/bestSellerSlider';
import Banner2 from '../components/indexPage/banner2';
import DailyDrops from '../components/indexPage/dailyDrops';
import Banner3 from '../components/indexPage/banner3';
import Banner4 from '../components/indexPage/banner4';

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