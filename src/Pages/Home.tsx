import DreamHomeSection from '../components/DreamHomeSection/DreamHomeSection'
import Hero from '../components/Hero/Hero'
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection'
import { dreamHomeData } from '../Data/DreamHome/DreamHome'
import { heroData } from '../Data/Hero/Hero'
import { data } from '../Data/HowItWork/HowItWork'

const Home = () => {
  return (
    <div>
      <Hero {...heroData}></Hero>
      <HowItWorksSection {...data} />
      <DreamHomeSection {...dreamHomeData} /> 
    </div>
  )
}

export default Home
