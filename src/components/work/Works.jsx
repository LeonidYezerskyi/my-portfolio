import { useState, useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import ButtonLoadMore from "../buttonLoadMore/ButtonLoadMore";

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData.slice(0, page * 3 + 3));
        } else {
            const filteredProjects = projectsData.filter((project) => {
                if (item.name === "single project") {
                    return project.category.includes("single project");
                } else if (item.name === "team project") {
                    return project.category.includes("team project");
                } else if (item.name === "backend") {
                    return project.category.includes("backend");
                }
            });

            const startIndex = (page - 1) * 3;
            const endIndex = startIndex + 3;

            setProjects(filteredProjects.slice(0, endIndex));
        }
    }, [item, page]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
        setPage(1);
    };

    const onClickBtn = () => {
        setPage((page) => page + 1);
    };

    const showLoadMoreButton =
        item.name === "all"
            ? projects.length < projectsData.length
            : projects.length < projectsData.filter((project) => project.category.includes(item.name)).length;

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`${active === index ? "active-work" : ""} work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />;
                })}
            </div>

            <div className="work_btn-load container">
                {showLoadMoreButton && <ButtonLoadMore onClick={onClickBtn} />}
            </div>
        </div>
    );
};

export default Works;