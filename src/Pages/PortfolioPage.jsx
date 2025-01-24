import Project from "../Components/Project";
import '../../src/App.css';

export default function PortfolioPage() {

    const portfolioProjects = [
        {
            title: 'Employee Tracker', 
            description: 'Employee Tracker is a command-line application that helps users to manage employee data. The application allows users to manage and view departments, roles and employee information.', //TODO add description
            githubLink: 'https://github.com/JCollver23/Employee-Tracker', 
            deployedLink: 'deployed.com', //TODO add deployed link
            image: '/assets/Employee-tracker.png' //TODO add image path
        },
        {
            title: 'Vehicle Builder', //TODO add title
            description: 'This Node.js application helps to provide prompts to easily build and operate a vehicle.', //TODO add description
            githubLink: 'https://github.com/JCollver23/VehicleBuilder', //TODO add github link
            // deployedLink: 'deployed.com', //TODO add deployed link
            image: '/assets/Vehicle-builder.png' //TODO add image path
        },
        {
            title: 'README Generator', //TODO add title
            description: 'This Node.js application helps to provide prompts to easily generate a clean adn professional README.md file with the data you provided in markdown format.', //TODO add description
            githubLink: 'https://github.com/JCollver23/README-Creator', //TODO add github link
            // deployedLink: 'deployed.com', //TODO add deployed link
            image: '/assets/README-generator.png' //TODO add image path
        },
        {
            title: 'Weather Dashboard', //TODO add title
            description: 'Built a weather dashboard application that calls the OpenWeather API and renders data in the browser', //TODO add description
            githubLink: 'https://github.com/JCollver23/Weather-Dashboard', //TODO add github link
            deployedLink: 'https://weather-dashboard-8dsm.onrender.com', //TODO add deployed link
            image: '' //TODO add image path
        },
        {
            title: 'Coffee Paralyzed?', //TODO add title
            description: 'A coffee generator app that helps you to try new coffee drinks!', //TODO add description
            githubLink: 'https://github.com/NickDavis07/Coffee-Paralyzed', //TODO add github link
            deployedLink: 'dhttps://nickdavis07.github.io/Coffee-Paralyzed/', //TODO add deployed link
            image: '/assets/Coffee-paralyzed.png' //TODO add image path
        },
        {
            title: 'Portfolio Project', //TODO add title
            description: '', //TODO add description
            githubLink: 'github.com', //TODO add github link
            deployedLink: 'deployed.com', //TODO add deployed link
            image: '' //TODO add image path
        }
    ];


    return(
        <div className="page_container">   
            {portfolioProjects.map((project, index) => (
                <Project 
                key = {index}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                image={project.image}
                />
            ))}

        </div>
        )}