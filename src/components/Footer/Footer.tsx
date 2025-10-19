import type { FooterData } from '../../Interfaces/Interfaces'
import styles from './Footer.module.css'

const Footer = ({info, columns, subFooter}: FooterData) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.info}>
          <div className={styles.logo}><img src={info.logo} alt="logo" /></div>
          <p className={`font-weight-400 ${styles.text}`}>{info.text}</p>
        </div>
        <div className={styles.columns}>
          {columns.map((column, index) => (
            <div key={index} className={styles.column}>
              <h2 className={`font-weight-700 ${styles.title}`}>{column.title}</h2>
              <ul className={styles.links}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={`font-weight-400`}>
                    {link}
                  </li>
                ))}
                <div className={styles.socialIcons}>
                  {column.icon?.map((icon, iconIndex) => (
                    <div key={iconIndex} className={styles.icon}><img src={icon} alt="" /></div>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.subFooter}>
        <strong className={`font-weight-400 line-height-100 ${styles.left}`}>{subFooter.left}</strong>
        <div className={styles.right}>
          {subFooter.right.map((item, index) => (
            <strong key={index} className={`font-weight-400 line-height-100 ${styles.item}`}>{item}</strong>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
