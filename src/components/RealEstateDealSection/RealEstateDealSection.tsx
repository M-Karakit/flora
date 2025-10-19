import styles from './RealEstateDealSection.module.css'
import Section from '../Section/Section'
import SectionHeader from '../SectionHeader/SectionHeader'
import type { RealEstateDealData } from '../../Interfaces/Interfaces'
import { useState } from 'react'

const RealEstateDealSection = ({categories, cards}: RealEstateDealData) => {
    const [selectedCategory, setSelectedCategory] = useState(1);
  return (
    <Section>
        <SectionHeader 
            title='Best Real Estate Deals'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
        />

        <div className={styles.categories}>
            {categories.map(category => (
            <div key={category.id} className={`${styles.category}`} onClick={() => setSelectedCategory(category.id)}>
                <h3 className={`font-weight-400 line-height-100 ${styles.title} ${selectedCategory === category.id ? styles.active : ''}`}>{category.title}</h3>
            </div>
            ))}
        </div>

        <div className={styles.cards}>
            {cards.filter(card => card.categoryId === selectedCategory).map(card => (
                <div className={styles.card} key={card.id}>
                    <div className={styles.image}><img src={card.image} alt="image" /></div>
                    <div className={styles.buttons}>
                        {card.btn.map(button => (
                            <button className={`font-weight-400 line-height-100 ${styles.content}`} key={button.id}>{button.content}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Section>
  )
}

export default RealEstateDealSection
