import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode,
    className?: string
}

const Section = ({children, className = ''}: SectionProps) => {
  return (
    <section className={`${styles.whiteSpacing} ${className}`}>
      {children}
    </section>
  )
}

export default Section
