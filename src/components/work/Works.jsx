import { useState, useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                if (item.name === 'single project') {
                    return (
                        project.category.includes('single project')
                    );
                } else if (item.name === 'team project') {
                    return (
                        project.category.includes('team project')
                    );
                } else if (item.name === 'backend') {
                    return (
                        project.category.includes('backend')
                    );
                }
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`${active === index ? 'active-work' : ''} work__item`}
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
        </div>
    );
};

export default Works;

