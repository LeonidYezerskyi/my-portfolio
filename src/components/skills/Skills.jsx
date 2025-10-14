import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Technical Expertise</h2>
            <span className="section__subtitle">The main technology stack that I specialize in</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills