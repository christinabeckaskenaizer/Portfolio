import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Christina Beck-Askenaizer <br>
          </br><GradientText>Software Engineer</GradientText>
        </>
      }
      description={
        <>
          Welcome! I'm Christina, a software engineer who enjoys learning new technologies.
Outside of coding, I enjoy traveling, discovering new board games, and collaborating on open-source projects.
        </>
      }
      avatar={
        <img
          className="rounded-2xl"
          src="\assets\images\me.jpg"
          alt="Image of Christina"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/christinabeckaskenaizer/" target='_blank'>
            <HeroSocial
              src="\assets\images\icons8-linkedin-48.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/christinabeckaskenaizer" target="_blank">
            <HeroSocial
              src="\assets\images\icons8-github-94.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
