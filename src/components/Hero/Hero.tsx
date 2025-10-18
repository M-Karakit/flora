import type { HeroData } from '../../Interfaces/Interfaces'
import styles from './Hero.module.css'

const Hero = ({title, subTitle, stats, image} : HeroData) => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={`font-weight-700 ${styles.title}`}>{title}</h1>
      <p className={`font-weight-400 ${styles.subTitle}`}>{subTitle}</p>
      <div className={styles.statsContainer}>
        {stats.map(stat => (
          <div className={styles.statsItem} key={stat.id}>
            <div className={styles.icon}><img src={stat.icon} alt="" /></div>
            <div>
              <h2 className={`font-weight-500 ${styles.stateTitle}`}>{stat.stateTitle}</h2>
              <p className={`font-weight-400 ${styles.stateSubTitle}`}>{stat.stateSubTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.heroImg}><img src={image} alt="hero-img" /></div>
    </div>
  )
}

export default Hero
