import DreamHomeSection from '../components/DreamHomeSection/DreamHomeSection'
import Hero from '../components/Hero/Hero'
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection'
import MostTrendingSection from '../components/MostTrendingSection/MostTrendingSection'
import { dreamHomeData } from '../Data/DreamHome/DreamHome'
import { heroData } from '../Data/Hero/Hero'
import { data } from '../Data/HowItWork/HowItWork'
import { mostTrending } from '../Data/MostTrending/MostTrending'

const Home = () => {
  return (
    <div>
      <Hero {...heroData}></Hero>
      <HowItWorksSection {...data} />
      <DreamHomeSection {...dreamHomeData} /> 
      <MostTrendingSection {...mostTrending} />
    </div>
  )
}

export default Home
