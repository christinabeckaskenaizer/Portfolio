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
  </Section>
);

export { RecentPosts };
