import {
  GradientText,
  Section,
} from 'astro-boilerplate-components';


const RecentPosts = () => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Tech <GradientText>Stack</GradientText>
        </div>
      </div>
    }
  >
    <div className='align-center center grid grid-cols-4 gap-3'>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/fluency/48/docker.png" alt="docker"/>
    <p className="sm:flex hidden pl-4 mt-2">Docker</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-10 h-10 hover:background-red-800' src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react"/>
    <p className="sm:flex hidden pl-4 mt-2">React</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    <p className="sm:flex hidden pl-4 mt-2">JavaScript</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>
    <p className="sm:flex hidden pl-4 mt-2">TypeScript</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
    <p className="sm:flex hidden pl-4 mt-2">Python</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/postgreesql.png" alt="postgresql"/>
    <p className="sm:flex hidden pl-4 mt-2">PostgreSQL</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-8 h-8 hover:background-red-800' src="https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png" alt="django"/>
    <p className="sm:flex hidden pl-8 mt-2">Django</p>
  </div>
  <div className='inline-flex flex-row items-center p-3 sm:border rounded border-cyan-600'>
    <img className='w-10 h-10 hover:background-red-800' src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" alt="fastapi"/>
    <p className="sm:flex hidden pl-8 mt-2">FastAPI</p>
  </div>
</div>
</Section>
);

export { RecentPosts };
