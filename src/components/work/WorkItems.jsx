
const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__button-wrapper">
                <button type="button" className="work__button-container">
                    <a href={item.url} target="_blank" rel="noreferrer" className="work__button" >
                        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>
                </button>
                <button type="button" className="work__button-container">
                    <a href={item.urlGit} target="_blank" rel="noreferrer" className="work__button" >
                        Code <i className="uil uil-github-alt"></i>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default WorkItems