import cLogo from "../images/cLogo.svg"
import java_logo from "../images/java_logo.svg"
import controller1 from "../images/controller_images/fusion1.png"
import sql_logo from "../images/sql_logo.svg"
import java_script_logo from "../images/java_script_logo.svg"
import css_logo from "../images/css_logo.svg"
import docker_logo from "../images/docker_logo.svg"
import gcp_logo from "../images/gcp_logo.svg"
import git_logo from "../images/git_logo.svg"
import html_logo from "../images/html_logo.svg"
import cLogo2 from "../images/cLogo2.svg"
import django_logo from "../images/django_logo.svg"
import react_logo from "../images/react_logo.svg"
import python_logo from "../images/python_logo.svg"
import aws from "../images/aws.svg"
import tensorFlow_logo from "../images/tensorFlow_logo.svg"
//import linux_logo from "../images/linux_logo.svg"
import stock_predictor from "../images/stock_predictor.svg"
import movieMatch from "../images/movie_match.svg"
import plantSocial from "../images/plant_social2.svg"
import parallel from "../images/parallels.png"
import personal_site from "../images/personal_site.png"
import jcp_logo from "../images/jcp_logo.svg";
import macys_logo from "../images/macys_logo.svg"
import amazon_logo from "../images/amazon_logo.svg"
import remotask_logo from "../images/remotask_logo.svg"
import jamba from "../images/jamba_logo.svg"
import plant_social_home from "../images/plant_social_home.png"
import plant_social_login from "../images/plant_social_login.png"
import plant_social_lookup from "../images/plant_social_lookup.png"
import plant_social_main from "../images/plant_social_main.png"
import plant_social_picture from "../images/plant_social_picture.png"
import coinable from "../images/coinable.svg"
import particle_sim from "../images/particle-sim.png"
import mongoDB_logo from "../images/mongoDB.svg"
import lander from "../images/lander_game.png"
import { VscTools } from "react-icons/vsc"
export const navLinks = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "skills",
        title: "Skills"
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "experience",
        title: "Experience"
    }
];
export const about = "I am from the San Francisco Bay Area and am pursuing a master's degree in computer science at San Jose State University this coming fall, 2024. I obtained my bachelor's in computer science from Chico State in 2023. With the skills that I received from my undergraduate studies, I have found work as an AI generation trainer and a full-stack software engineer. My work and school experience helped me sharpen my technical skills and provided me with a deep understanding of agile project management, web/app development, data manipulation, and software architecture."

export const skill = [
    {
        src: cLogo2,
        title: "C"
    },
    {
        src: cLogo,
        title: "C++",
    },
    {
        src: java_logo,
        title: "Java"
    },
    {
        src: sql_logo,
        title: "SQL"
    },
    {
        src: python_logo,
        title: "Python"
    },
    {
        src: css_logo,
        title: "CSS"
    },
    {
        src: html_logo,
        title: "HTML"
    },
    {
        src: git_logo,
        title: "Git"
    },
    {
        src: java_script_logo,
        title: "JavaScript"
    },
    {
        src: gcp_logo,
        title: "GCP"
    },
    {
        src: django_logo,
        title: "Django"
    },
    {
        src: react_logo,
        title: "React"
    },
    {
        src: mongoDB_logo,
        title: "mongoDB"
    },
    {
        src: aws,
        title: "AWS"
    },
    {
        src: docker_logo,
        title: "Docker"
    },
    {
        src: tensorFlow_logo,
        title: "TensorFlow"
    }
]
export const projects = [
    {
        src: particle_sim,
        title: "N-Bodies Simulation",
        description: "Developed an n-bodies simulator using openGL create a graphics pipleine for rendering. Paralized the the simulation in CUDA resulting in a 14x increase in particle creation.",
        h: "h-100",
        href: "https://github.com/jtmacoco/n-bodies_sim",
        github: "https://github.com/jtmacoco/n-bodies_sim",
        tools: "C++, CUDA, OpenGL",
    },
    {
        src: lander,
        title: "Lander Game",
        description: "Helped develop a 3D lander game, where the goal is to land on different landing pads and to avoid colliding into the terrain",
        h: "h-50",
        href: "https://www.youtube.com/watch?v=_90nc81bVAY",
        github: "",
        tools: "openFrameworks OpenGL C++",
    },

    {
        src: stock_predictor,
        title: "Stock-Predictor",
        description: "Users can check predicted stock prices, manage personal portfolios, track portfolio data, and compare predicted vs actual prices. Note: Due to hosting on a Raspberry Pi, loading times may vary based on your location.",
        h: "h-100",
        href: "https://github.com/jtmacoco/Capstone",
        github: "https://github.com/jtmacoco/Capstone",
        tools: "django python docker gcp/raspi-4",
    },
    {
        src: controller1,
        title: "Game Controller Attachment",
        description: " Desgined a simple game controller that attaches to the back of a phone using mag safe magnets. This allows for users to play games similar to the Xperia phone.",
        h: "h-60",
        href: "https://www.thingiverse.com/thing:6760179",
        github: "",
        tools: "Fusion 360, 3d printer",
    },
    {
        src: movieMatch,
        title: "Movie Match",
        description: "Users can sign up and create a movie list. Once users have a movie list, they will be shown a list of users whose movie interests match their own. Users also have the option to update their movie list and delete any unwanted conversation.",
        h: "h-100",
        href: "https://project-moviematch.com/",
        github: "https://github.com/jtmacoco/movie_match_v2",
        tools: "react javascript firebase",

    },
    {
        src: plantSocial,
        title: "Plant Social",
        description: "The project allows users to share data and other plant information with people. Users can also take a picture of a plant, and the application will identify the plant type; if it is identified wrong, users may adjust it themselves.",
        h: "h-100",
        href: "/plantSocial",
        github: "/plantSocial",
        tools: "flutter dart firebase python",
    },
    {
        src: parallel,
        title: "Factoring a Large Semiprime",
        description: "For this project, I achieved speed up when finding the factors of a large semi-prime. This is the basic idea for cryptography strength used in the encryption and decryption of keys. This project's challenge is finding the original large primes used to produce the semi-prime. The tools that I used were C++ and OpenMP.",
        h: "h-30",
        href: "/parallel",
        github: "/parallel",
        tools: "c++ openmp",
    },
    {
        src: personal_site,
        title: "Personal Website",
        description: "You have most likely been to my site this is here incase you would like to view the code I used to develop this site.",
        h: "h-100",
        href: "/",
        github: "https://github.com/jtmacoco/personal_website_v2",
        tools: "nextjs typescript"
    }
];
export const experience_info = [
    {
        title: "Full Stack Software Engineer Intern",
        date: "Febuary2024 - June 2024",
        description: [
            "Implemented email verification system utilizing Amazon Simple Email Service, resulting in reliable and secure communication within seconds for a seamless user authentication",
            "Devised a RESTful API with JavaScript for efficient retrieval, storage, and updating of database records, delivering streamlined data management and scalability",
            "Formulated and implemented database architecture in MongoDB resulting in efficient data management",
            "Setup NGINX reverse proxy for load balancing, improving backend efficiency, scalability, and security",
        ],
        src: coinable,
        py: "py-1",
        location: "Remote",
        bg: "#5546FF",
        company: "Coinable",
    },
    {
        title: "AI Trainer",
        date: "May 2023 - Febuary 2024",
        description: [
            "Trained machine learning models on how to code in python and C, resolving issues that occur during training",
            "Conducted thorough code evaluations for optimal efficiency",
            "Documented and delivered clear explanations of the model output",
        ],
        src: remotask_logo,
        py: "py-1",
        location: "Remote",
        bg: "white",
        company: "Remotasks",
    },
    {
        title: "Warehouse Clerk",
        date: "May 2021 - August 2021",
        description: [
            "Processed orders, prepared items for shipment, and packed products into bags according to procedures.",
            "Maintained good communication and self-awareness to ensure the safety of self and coworkers"
        ],
        src: amazon_logo,
        py: "py-1",
        location: "San Leandro, CA",
        bg: "white",
        company: "Amazon",
    },
    {
        title: "Warehouse Clerk",
        date: "June 2019 - August 2019",
        description: [
            "Processed orders, prepared items for shipment, and packed products into bags according to procedures.",
            "Maintained good communication and self-awareness to ensure the safety of self and coworkers"
        ],
        src: amazon_logo,
        py: "py-1",
        location: "San Leandro, CA",
        bg: "white",
        company: "Amazon",
    },
    {
        title: "Sales Associate",
        date: "May 2019 - July 2019",
        description: [
            "Processed orders, prepared items for shipment, and packed products into bags according to procedures.",
            "Maintained good communication and self-awareness to ensure the safety of self and coworkers."
        ],
        src: macys_logo,
        py: "py-6",
        location: "San Leandro, CA",
        bg: "white",
        company: "Macy's",
    },
    {
        title: "Smooth Barista",
        date: "March 2018 - June 2018",
        description: [
            "Provide excellent customer service and maintain positive relations with customers.",
            "Prepared and served a variety of smoothies, juices, and snacks, adhering to quality and safety standards."
        ],
        src: jamba,
        py: "py-0",
        location: "Pleasanton, CA",
        bg: "white",
        company: "Jamba Juice",
    },
    {
        title: "Sales Associate",
        date: "November 2017 - March 2018",
        description: [
            "Handled cash transactions and maintained accurate registers, ensuring a smooth and error-free checkout process.",
            "Collaborated with team members to achieve team sales goals, fostering a cooperative and supportive work environment."
        ],
        src: jcp_logo,
        py: "py-6",
        location: "Pleasanton, CA",
        bg: "white",
        company: "JCPenny",
    },
]
export const plant_social_info = [
    {
        desc: [
            "This is plant social, and the project's goal is to create an app to provide information to users about plants, including information on how to care for a plant. The app will also provide a platform for users to interact with other users about sharing information on plants and to provide a service to exchange or give their plants to other users. Users can also take a picture of a plant, and the application will identify its type. The first picture says, \"Add plant type\" The app fills this in; if it is wrong, users can change the value.",
            "This was a group project, and I was on both the software engineer and usability engineer teams. My contribution to this project was helping to design the application, helping develop the front end, and designing and implementing the database. For the database work, we used Firebase as it was easiest to implement with Flutter.",
            "This project was developed in Flutter and uses Dart. The whole team had to learn Flutter and Dart during this project, as we needed to gain experience using these tools. To help maintain a clean and organized project, we each forked a main git repo with the working code. This allows us to work and then merge changes to the main repo individually. We also used the GitHub Kanban board to help with project management. During the development of this project, we would also have weekly scrum meetings to see where we are at with the project and how well this sprint is going. Toward the end, we did some user testing to see how well our application performed. Overall we could get a solid working application within a short period.",
        ],
        images: [
            {
                src: plant_social_home,
                alt: "home"
            },
            {
                src: plant_social_login,
                alt: "login"

            },
            {
                src: plant_social_picture,
                alt: "picture"
            },
            {
                src: plant_social_lookup,
                alt: "lookup"
            },
            {
                src: plant_social_main,
                alt: "main"
            },
        ]
    }

]