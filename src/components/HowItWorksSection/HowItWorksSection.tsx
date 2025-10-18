import type { HowItWorksSectionData } from '../../Interfaces/Interfaces'
import Section from '../Section/Section'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './HowItWorksSection.module.css'

const HowItWorksSection = ({cards}: HowItWorksSectionData) => {
  return (
    <Section>
        <SectionHeader
            title='How it Works'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
        />

        <div className={styles.cardsContainer}>
            {cards.map(card => (
                <div key={card.id}
                className={`${styles.card} ${card.background ? styles[card.background] : ''}`}>
                    <div><img src={card.icon} alt="icon" /></div>
                    <h2 className={`font-weight-600 line-height-100 ${styles.title} ${card.textColor ? styles[card.textColor] : ''}`}>{card.title}</h2>
                    <p className={`font-weight-400 ${styles.subTitle} ${card.textColor ? styles[card.textColor] : ''}`}>{card.subTitle}</p>
                </div>
            ))}
        </div>
    </Section>
  )
}

export default HowItWorksSection
