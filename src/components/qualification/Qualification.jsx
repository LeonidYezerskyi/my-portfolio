import { useState } from "react"
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification & Experience</h2>
            <span className="section__subtitle">Professional journey</span>

            <div className="qualification__containe container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fullstack Developer</h3>
                                <span className="qualification__subtitle">IT School GoIT (Kyiv)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022-2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Master of Journalism</h3>
                                <span className="qualification__subtitle">Zaporizhzhya National University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2008-2009
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Journalism, Publishing and Editing</h3>
                                <span className="qualification__subtitle">Mykolaiv State University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2004-2008
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Compeers AI Corporation (Delaware, United States)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 11.2024 - Present (full-time)
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Fullstack Developer</h3>
                                <span className="qualification__subtitle">Mavens Tech Lab INC (Miami, Florida, United States)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 02.2024 - 11.2024 (part-time)
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fullstack Developer</h3>
                                <span className="qualification__subtitle">Freelance (Kyiv, Ukraine)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 04.2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Merchandiser</h3>
                                <span className="qualification__subtitle">“Heinemann Duty Free” (Germany), location of work - "Kyiv" International Airport (Kyiv, Ukraine)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 05.2021-02.2022
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Traveler</h3>
                                <span className="qualification__subtitle">Self employed (25 countries)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 10.2016 – 12.2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Editor, Head of the National and Capital News Department</h3>
                                <span className="qualification__subtitle">Newspaper “Gazeta po-ukrainsky”, magazine “Kraina”, site “gazeta.ua” (Kyiv, Ukraine)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 04.2010 – 04.2016
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Qualification