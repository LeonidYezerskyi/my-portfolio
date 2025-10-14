import './about.css';
import AboutImg from "../../assets/profile.jpg"
// import Info from './Info';
import CV from "../../assets/CV_LeonidYezerskyi.pdf"

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">From Newsroom to Fullstack</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    {/* <Info /> */}
                    <p className="about__description">
                        I am a passionate Fullstack JavaScript Developer with 2 years of commercial experience, based in Kyiv, Ukraine.<br />
                        My professional journey is defined by one core principle: deep immersion and mastery. When I commit to a field, I am driven by an intense curiosity that demands a profound understanding and hands-on experience.<br />
                        This philosophy shaped my previous career: I spent 10 years in journalism, culminating in six years as the Head of the National and Capital News Department for a major nationwide media group. This same drive fueled my desire for exploration, leading me to spend 3 continuous years traveling across 25 countries.<br />
                        Today, that same intense focus is dedicated entirely to the IT landscape. I possess a robust 2-year commercial background following specialized training, and I am eager to progress further. I excel at delivering well-engineered, scalable solutions that transition seamlessly from idea to execution.<br />
                        I have a solid understanding of a broad technology stack, including:<br />
                        <span className="about__textsubtitle">Front-end:</span> HTML, CSS, JavaScript, React, Redux, Next.js, Tailwind, TypeScript, Tiptap.<br />
                        <span className="about__textsubtitle">Back-end & Databases:</span> Node.js/Express, MongoDB, PostgreSQL, Neon DB, Supabase, Strapi, Payload CMS.<br />
                        <span className="about__textsubtitle">Mobile & Integrations:</span> React Native, Clerk Auth, OpenAI, Paddle, LiqPay.<br />
                        <span className="about__textsubtitle">My goal is simple:</span> to leverage my dedication and unique background to solve complex problems and contribute to high-impact projects.
                    </p>
                    <a download="" href={CV} className="button button--flex">Download CV
                        <svg
                            className="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>)
}

export default About