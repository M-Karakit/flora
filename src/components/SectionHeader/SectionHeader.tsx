import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
    title: string;
    subTitle: string;
}

const SectionHeader = ({title, subTitle}: SectionHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={`font-weight-700 ${styles.title}`}>{title}</h1>
      <p className={`font-weight-400 ${styles.subTitle}`}>{subTitle}</p>
    </div>
  )
}

export default SectionHeader
