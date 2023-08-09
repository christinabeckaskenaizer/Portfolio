import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 bg-babypowder">
      <h1 className="text-gunmetal font-sans font-normal text-5xl">
        Christina Beck-Askenaizer
      </h1>
      <h2 className="text-carrot font-sans font-bold text-3xl">
        Full-Stack Developer
      </h2>
      <Image
        className="mt-5 rounded-full h-48 w-48 overflow-hidden object-cover"
        src="/images/profilepic.png"
        alt="image of Christina"
        width={300}
        height={300}
      />
      <div className="mt-5 flex flex-row items-center justify-around">
        <a
          href="https://www.linkedin.com/in/christinabeckaskenaizer/"
          target="_blank"
        >
          <svg
            className="fill-gunmetal hover:fill-carrot mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="https://github.com/christinabeckaskenaizer" target="_blank">
          <svg
            className="fill-gunmetal hover:fill-carrot mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
      <a
        className="mt-5 bg-amaranthpink text-babypowder font-bold py-2 px-4 rounded inline-flex items-center"
        href="Christina_Software_Developer_Resume.pdf"
        title="Resume"
        download
      >
        Download
      </a>
      <div className="mt-5 text-center bg-forest w-full">
        <h1 className="text-babypowder text-2xl font-bold mt-20 my-3 font-sans">
          Welcome!
        </h1>
        <p className="text-babypowder text-lg my-3 px-10 font-sans">
          I'm Christina, a full-stack software engineer with a passion for
          front-end development.
        </p>
        <p className="text-babypowder text-lg mb-20 px-10 font-sans">
          Building websites and exploring the ever-evolving tech landscape is
          what fuels my passion for software development. Thanks to my
          background in inventory control, I've honed a keen eye for detail,
          making debugging and testing code my specialty! Outside of coding, I
          love traveling, discovering new board games, and drawing digital art.
        </p>
      </div>
      <div className="text-center w-full">
        <h1 className="text-gunmetal text-4xl font-bold mt-20 my-3 font-sans">
          My Favorite Projects
        </h1>
        <p className="text-gunmetal mb-8">
          For more projects, be sure to visit the "All Projects" tab!
        </p>
      </div>
      <div className="px-24 w-full flex justify-between flex-row mx-10">
        <Card
          title="Whimzee"
          img="/images/Whimzee Home.PNG"
          description="E-commerce application inspired by Etsy"
          repo="https://github.com/christinabeckaskenaizer/Whimzee"
        />
        <Card
          title="CarCar"
          img="/images/CarCar-Main.PNG"
          description="Automobile dealership management application"
          repo="https://github.com/christinabeckaskenaizer/Whimzee"
        />
      </div>
      <div>
        <h1 className="text-gunmetal text-4xl font-bold mt-20 my-3 font-sans">
          Tech Stack
        </h1>
      </div>
      <div className="flex flex-row justify-between w-full px-24">
        <p className="text-gunmetal text-2xl font-bold mt-20 my-3 font-sans">
          Frontend Technologies
        </p>
        <p className="text-gunmetal text-2xl font-bold mt-20 my-3 font-sans">
          Backend Technologies
        </p>
        <p className="text-gunmetal text-2xl font-bold mt-20 my-3 font-sans">
          Languages
        </p>
        <p className="text-gunmetal text-2xl font-bold mt-20 my-3 font-sans">
          Development Tools
        </p>
      </div>
    </main>
  );
}
