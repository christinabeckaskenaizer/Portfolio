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
Outside of coding, I enjoy traveling, discovering new board games, and drawing digital art.
        </>
      }
      avatar={
        <img
          className="w-96 h-96 rounded-2xl"
          src="/assets/images/profile-pic (8).png"
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
    <a href='\assets\resume\Christina_Software_Engineer_Resume.pdf' download><button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-800 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Resume</span>
</button>
</a>
  </Section>
);

export { Hero };
