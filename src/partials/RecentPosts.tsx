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
    <div className='align-center center columns-4'>
    <img  className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/fluency/48/docker.png" alt="docker"/>
    <img  className='w-10 h-10 hover:background-red-800' src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react"/>
    <img  className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    <img  className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>
    <img  className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
    <img  className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/postgreesql.png" alt="postgresql"/>
    <img  className='w-30 h-30 hover:background-red-800' src="https://img.icons8.com/color/48/django.png" alt="django"/>
    <img  className='w-10 h-10 hover:background-red-800' src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" alt="fastapi"/>
    </div>
  </Section>
);

export { RecentPosts };
