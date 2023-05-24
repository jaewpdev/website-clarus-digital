import { Helmet } from 'react-helmet';

import { ReactComponent as ImgSparks } from '../assets/img--sparks.svg';
import { Button } from '../components/Button';

function HeroSection() {
  return (
    <section className="md:mt-[200px] flex flex-col items-center justify-between relative lg:gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl xl:text-9xl font-medium text-center">
          Uncover Your <br /> Growth Potential
        </h1>

        <p className="max-w-[50ch] xl:max-w-[50ch] 2xl:max-w-[55ch] text-center text-lg md:text-xl my-6 sm:mt-8 sm:mb-12">
          Our goal is simple: to help your business succeed online. We'll
          connect you with your audience and turn those online engagements into
          sales.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button to="/contact">Contact Us</Button>
          <Button to="/schedule-discovery-call" variant="secondary">
            Request Discovery Call
          </Button>
        </div>
      </div>
      <ImgSparks className="max-w-[350px] lg:max-w-[500px]" />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Clarus Digital — Home</title>
      </Helmet>
      <HeroSection />
    </>
  );
}
