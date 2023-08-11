import Image from "next/image";
import { title } from "process";

interface Props {
  title: string;
  img: string;
  description: string;
  repo: string;
}

export default function Card({ title, img, description, repo }: Props) {
  return (
    <div className="mt-5 w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow hover:scale-105">
      <a href="#">
        <Image
          className="w-full object-cover rounded-lg"
          src={img}
          alt="project landing page"
          width={300}
          height={300}
        />
      </a>
      <hr></hr>
      <div className="mt-3 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gunmetal">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="text-gunmetal text-sm font-regular mr-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {description}
          </span>
        </div>
        <div className="relative right-0">
          <a
            href={repo}
            target="_blank"
            className="text-gunmetal font-medium rounded-lg text-sm text-center"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}
