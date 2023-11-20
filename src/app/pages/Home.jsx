import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import DestinationSection from '../components/DestinationSection'
import PointSection from '../components/PointSection'
import FeatureSection from '../components/FeatureSection'
import TestimonialSection from '../components/TestimonialSection'
import SubscribeSection from '../components/SubscribeSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div >
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <DestinationSection />
        <PointSection />
        <FeatureSection />
        <TestimonialSection />
        <SubscribeSection />
        <Footer />
    </div>
  )
}

export default Home