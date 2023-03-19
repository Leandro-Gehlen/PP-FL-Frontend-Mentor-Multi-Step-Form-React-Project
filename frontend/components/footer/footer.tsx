import styles from '../footer/footer.module.css'

const Footer = () => {
    return (
        <footer>
            <p className={styles.paragraph}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/Leandro-Gehlen">Leandro Gehlen</a>.
            </p>
        </footer>
    )
}

export default Footer