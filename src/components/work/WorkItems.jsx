import { toast } from 'react-toastify'

const WorkItems = ({ item }) => {
    const handleCodeClick = (e) => {
        if (item.urlGit === "private") {
            e.preventDefault()
            toast.info("This repository is private. You can view its content during a personal call.")
        }
    }

    const handleDemoClick = (e) => {
        if (item.title === "Letterpal") {
            e.preventDefault()
            toast.info("It is a commercial project. A website to generate a cover letter in seconds with artificial intelligence. This project is private. You can view its content during a personal call.", {
                position: "top-right",
                autoClose: 15000, // 15 секунд
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                    backgroundColor: 'white',
                    width: '400px',
                    border: 'none',
                    paddingRight: '40px' // Збільшений правий падінг
                },
                progressStyle: {
                    backgroundColor: 'rgba(112, 245, 3, 0.68)' // Зелений прогрес-бар
                },
                iconTheme: {
                    primary: 'rgba(112, 245, 3, 0.68)', // Зелена іконка
                    secondary: 'white'
                }
            })
        }
    }

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__button-wrapper">
                {!item.category.includes('backend') && (
                    <button type="button" className="work__button-container">
                        <a
                            href={item.title === "Letterpal" ? "#" : item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="work__button"
                            onClick={handleDemoClick}
                        >
                            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                        </a>
                    </button>
                )}
                <button type="button" className="work__button-container">
                    <a
                        href={item.urlGit === "private" ? "#" : item.urlGit}
                        target="_blank"
                        rel="noreferrer"
                        className="work__button"
                        onClick={handleCodeClick}
                    >
                        Code <i className="uil uil-github-alt"></i>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default WorkItems