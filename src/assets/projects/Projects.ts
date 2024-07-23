import { React, Typescript, Javascript, Node, Mongo, Sass, Css, Html } from '@/assets/Icons'
import type { IconType } from '@/assets/Icons';
import Jump2Digital from '@/assets/projects/hackathon2.webp';
import CAPBA from '@/assets/projects/capba.webp';
import Jugueteria from '@/assets/projects/ecommerce.webp';
import GameApp from '@/assets/projects/game-app.webp';
import WeatherApp from '@/assets/projects/weather-app.webp';
import SpotifyClon from '@/assets/projects/spotify-clon.png';

export type ProjectType = {
  link: string,
  img: string,
  title: string,
  description: string,
  technologies: IconType[],
}

const ProjectsList = [
  {
    link: "https://jump2digital-hackathon.vercel.app/",
    img: Jump2Digital,
    title: "Jump2Digital",
    description: "Rick And Morty app made for Jump2Digital hackathon with Typescript and React",
    technologies: [Typescript, React, Css, Html],
  },
  {
    link: "https://id2ec.com.ar/",
    img: CAPBA,
    title: "CAPBA",
    description: "Landing page created for Colleague of Architects from Buenos Aires. The website is done with HTML, CSS, and JS.",
    technologies: [Javascript, Css, Html],
  },
  {
    link: "https://spotify-clon-xi.vercel.app/",
    img: SpotifyClon,
    title: "Spotify Clon",
    description: "Spotify clon made with React and Typescript",
    technologies: [Typescript, React, Css, Html],
  },
  {
    link: "https://react-game-app.vercel.app/",
    img: GameApp,
    title: "Game App",
    description: "React game app consuming API that shows the ammount of reviews on Steam for the game you are looking for.",
    technologies: [React, Css, Html],
  },
  {
    link: "https://jugueteria-cosmica.glitch.me/",
    img: Jugueteria,
    title: "Juguetería Cósmica",
    description: "Demo for a ecommerce for my Bootcamp. Developed with JS and Node, uses MongoDB Atlas and styled in SASS.",
    technologies: [Sass, Javascript, Node, Mongo],
  },
  {
    link: "https://weather-react-app.glitch.me/",
    img: WeatherApp,
    title: "Weather App",
    description: "Weather app crafted with React, CSS, and HTML. Delivers accurate forecasts with an intuitive and elegant interface.",
    technologies: [React, Css, Html],
  },
]

export default ProjectsList;