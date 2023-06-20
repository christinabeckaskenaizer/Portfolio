import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <a href='https://whimz.gitlab.io/module3-project-gamma/' target='_blank'>
      <Project
        name="Whimzee"
        description="Whimzee is an Etsy clone that empowers users to engage in a dynamic online marketplace.
        Users can sign up, create their own shops, post listings(new and used), purchase items, and browse through a diverse range of products.
        Whimzee offers a seamless and user-friendly experience, connecting buyers and sellers in a vibrant ecosystem of creativity and commerce."
        link="https://whimz.gitlab.io/module3-project-gamma/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Whimzee home page',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>FastAPI</Tags>
            <Tags color={ColorTags.LIME}>React</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
          </>
        }
      />
      </a>
      <Project
        name="CarCar"
        description="CarCar is a powerful application designed to streamline the operations of car dealerships.
        It provides managers with an all-in-one solution to efficiently track sales, manage inventory, and oversee service operations.
        With this user-friendly application, you can effortlessly add and manage salespeople, customers, and service employees, ensuring smooth and effective dealership management."
        link="https://gitlab.com/CBeckAskenaizer/carcar"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Django</Tags>
            <Tags color={ColorTags.YELLOW}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Bootstrap</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
