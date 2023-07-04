import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Yezerskyi</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.linkedin.com/in/leonid-yezerskyi/"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/LeonidYezerskyi"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/leonid.yezerskyi/"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100000057225766"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer