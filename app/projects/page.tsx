import NavBar from "../components/navbar";
import Card from "../components/card";

export default function Page() {
  return (
    <>
      <NavBar></NavBar>
      <div className="px-24 w-full sm:grid grid-cols-3 sm:flex-auto sm:justify-between sm:mx-10">
        <Card
          title="Whimzee"
          img="/images/Whimzee Home.PNG"
          description="E-commerce application inspired by Etsy"
          repo="https://github.com/christinabeckaskenaizer/Whimzee"
        />
        <Card
          title="DeckDex"
          img="/images/dd-home.png"
          description="An application for Pokemon TCG deck building"
          repo="https://github.com/christinabeckaskenaizer/DeckDex"
        />
        <Card
          title="CarCar"
          img="/images/CarCar-Main.PNG"
          description="Automobile dealership management application"
          repo="https://github.com/christinabeckaskenaizer/Whimzee"
        />
        <Card
          title="Jammming"
          img="/images/CarCar-Main.PNG"
          description="Application to create playlists using the Spotify API"
          repo="https://github.com/christinabeckaskenaizer/Jammming"
        />
      </div>
    </>
  );
}
