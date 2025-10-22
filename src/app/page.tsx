import HomepageBestSeller from "@/pages/homepage/homepage-best-seller";
import HomepageCozySpot from "@/pages/homepage/homepage-cozy-spot";
import HomepageHero from "@/pages/homepage/homepage-hero";
import HomepageReservation from "@/pages/homepage/homepage-reservation";

// ----------------------------------------------------------------------

const Homepage = () => {
  return (
    <>
      <HomepageHero />
      <HomepageBestSeller />
      <HomepageCozySpot />
      <HomepageReservation />
    </>
  );
};

export default Homepage;
