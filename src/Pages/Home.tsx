import DreamHomeSection from '../components/DreamHomeSection/DreamHomeSection'
import Hero from '../components/Hero/Hero'
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection'
import MostTrendingSection from '../components/MostTrendingSection/MostTrendingSection'
import RealEstateDealSection from '../components/RealEstateDealSection/RealEstateDealSection'
import { dreamHomeData } from '../Data/DreamHome/DreamHome'
import { heroData } from '../Data/Hero/Hero'
import { data } from '../Data/HowItWork/HowItWork'
import { mostTrending } from '../Data/MostTrending/MostTrending'
import { realEstateDeal } from '../Data/RealEstateDeal/RealEstateDeal'

const Home = () => {
  return (
    <div>
      <Hero {...heroData}></Hero>
      <HowItWorksSection {...data} />
      <DreamHomeSection {...dreamHomeData} /> 
      <MostTrendingSection {...mostTrending} />
      <RealEstateDealSection {...realEstateDeal} />
    </div>
  )
}

export default Home
