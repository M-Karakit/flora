import styles from './MostTrendingSection.module.css'
import type { MostTrendingSectionData } from '../../Interfaces/Interfaces'
import Section from '../Section/Section'
import SectionHeader from '../SectionHeader/SectionHeader'

const MostTrendingSection = ({cards}: MostTrendingSectionData) => {
  return (
    <Section>
        <SectionHeader
            title='Most Trending'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
        />

        <div className={styles.cardsContainer}>
          {cards.map(card => (
            <div className={styles.card} key={card.id}>
              <div className={styles.image}><img src={card.img} alt="image" /></div>
              <p className={`font-weight-600 ${styles.price}`}>{card.price}</p>
              <p className={`font-weight-600 ${styles.description}`}>{card.description}</p>
              <div className={styles.location}>
                <div className={styles.icon}><img src={card.location.icon} alt="location icon" /></div>
                <p className={`font-weight-400 ${styles.address}`}>{card.location.address}</p>
              </div>
            </div>
          ))}
        </div>
    </Section>
  )
}

export default MostTrendingSection
