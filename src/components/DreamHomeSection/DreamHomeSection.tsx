import type { DreamHomeSectionData } from '../../Interfaces/Interfaces'
import styles from './DreamHomeSection.module.css'

const DreamHomeSection = ({content}: DreamHomeSectionData) => {
  return (
    <div className={styles.dreamHomeSection}>
        <img 
          src={content.img} 
          alt="" 
          className={styles.backgroundImage}
        />
        <div className={styles.content}>
            <h1 className={`font-weight-700 ${styles.title}`}>{content.title}</h1>
            <p className={`font-weight-400 ${styles.subTitle}`}>{content.subTitle}</p>
        </div>
    </div>
  )
}

export default DreamHomeSection
