

import PropTypes from 'prop-types';

export default function Project({ title, description, githubLink, deployedLink, image }) {
    return (
        <div className="project_container">
            <h2>{title}</h2>
            <p>{description}</p>
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="project-image"
                />
            )}
            <a href={githubLink}>Github</a> | <a href={deployedLink}>Deployed</a>
        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    image: PropTypes.string
};