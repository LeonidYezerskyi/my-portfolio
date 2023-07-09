// import ContactForm from "./ContactForm";
import "./contact.css";

const Contact = () => {

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container">
                {/* <div className="contact__container container grid"> */}
                <div className="contact__content">
                    {/* <h3 className="contact__title">Talk to me</h3> */}

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">leonid.yezerskyi@gmail.com</span>
                            <a href="mailto:leonid.yezerskyi@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>
                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">+38(097)989-80-12</span>
                            <a href="https://t.me/LeonidYezerskyi" className="contact__button" target="blank" rel="noreferrer">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+38(097)989-80-12</span>
                            <a href="https://api.whatsapp.com/send?phone=+380979898012&text=Hello, more information!" className="contact__button" target="blank" rel="noreferrer">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">Leonid Yezerskyi</span>
                            <a href="https://www.linkedin.com/in/leonid-yezerskyi/message" className="contact__button" target="blank" rel="noreferrer">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                {/* <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <ContactForm />
                </div> */}
            </div>
        </section>
    )
}

export default Contact