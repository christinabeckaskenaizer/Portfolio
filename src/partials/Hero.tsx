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
          Welcome! I'm Christina, a passionate software engineer specializing in front end technologies such as .
Outside of coding, I enjoy traveling, discovering new board games, and collaborating on open-source projects.
        </>
      }
      avatar={
        <img
          className="rounded-2xl"
          src="\public\assets\images\me.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/christinabeckaskenaizer/" target='_blank'>
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/" target="_blank">
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
