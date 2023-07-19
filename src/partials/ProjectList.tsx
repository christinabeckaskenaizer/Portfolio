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
      <Project
        name="Whimzee"
        description="Whimzee is an Etsy clone that empowers users to engage in a dynamic online marketplace.
        Users can sign up, create their own shops, post listings (new and used), purchase items, and browse through a diverse range of products.
        Whimzee offers a seamless and user-friendly experience, connecting buyers and sellers in a vibrant ecosystem of creativity and commerce."
        link="https://whimz.gitlab.io/module3-project-gamma/"
        img={{
          src: '/assets/images/green-shopping-bag-3d-icon-illustration-png.png',
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
      <Project
        name="DeckDex"
        description="DeckDex is an intuitive application that enables trainers to construct, customize, and manage their Pokemon TCG decks. With an extensive card database, users can optimize their strategies by adding, removing, and adjusting cards. Users can explore other trainers' decks, and add them to their favorites."
        link="https://github.com/christinabeckaskenaizer/DeckDex"
        img={{ src: '/assets/images/cf7923a46cf5a68b3dc9c4794b1fdfa1.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Next.js</Tags>
            <Tags color={ColorTags.PURPLE}>React</Tags>
            <Tags color={ColorTags.PINK}>Tailwind.css</Tags>
            <Tags color={ColorTags.GREEN}>PostgreSQL</Tags>
          </>
        }
      />
      <Project
        name="CarCar"
        description="CarCar is an application designed to streamline the operations of car dealerships.
        It provides managers with an all-in-one solution to efficiently track sales, manage inventory, and oversee service operations.
        With this convenient application, you can effortlessly add and manage salespeople, customers, and service employees, ensuring smooth and effective dealership management."
        link="https://github.com/christinabeckaskenaizer/CarCar"
        img={{ src: '/assets/images/3d-rendering-illustration-of-a-lowpoly-car-free-png.png', alt: 'Project Fire' }}
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
