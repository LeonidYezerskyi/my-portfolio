const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend & Data Management</h3>

            <div className="skills__box">
                {/* ГРУПА 1: Серверні Технології та БД */}
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Express.js</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">PostgreSQL / Neon DB</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Supabase</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Strapi / Payload CMS</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">GraphQL</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">REST API Design</h3>
                        </div>
                    </div>

                </div>

                {/* ГРУПА 2: Інструменти та Архітектура */}
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Socket.io</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CI/CD Basics</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Authentication (JWT/OAuth)</h3>
                            {/* Зберіг "Authentication (JWT/OAuth)" як єдине ціле, оскільки це загальний термін */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend