import styles from '../styles/Home.module.css'

export default function TableCells(){
    return (
        <div className={styles.grid}>
            <div className={styles.row}>
                <div className={styles.customCard}>
                <h2 className={styles.centerAlign}>ReactJS and React Native</h2>
                <p className={styles.centerAlign}>Find in-depth information about Next.js features and API.</p>
                </div>
                <div className={styles.customCard}>
                <h2 className={styles.centerAlign}>Front-end Development</h2>
                <p className={styles.centerAlign}>Find in-depth information about Next.js features and API.</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.customCard}>
                <h2 className={styles.centerAlign}>Next.JS</h2>
                <p className={styles.centerAlign}>Find in-depth information about Next.js features and API.</p>
                </div>
                <div className={styles.customCard}>
                <h2 className={styles.centerAlign}>HTML {'&'} CSS</h2>
                <p className={styles.centerAlign}>Find in-depth information about Next.js features and API.</p>
                </div>
            </div>
            
            <div className={styles.row}>
                <div className={styles.customCard}>
                <h2 className={styles.centerAlign}>Multilinguality</h2>
                <p className={styles.centerAlign}>Find in-depth information about Next.js features and API.</p>
                </div>
                <div className={styles.customCard}>
                <h2 className={styles.centerAlign}>Proficiency in Communication</h2>
                <p className={styles.centerAlign}>Find in-depth information about Next.js features and API.</p>
                </div>
            </div>
        </div>
    )
}