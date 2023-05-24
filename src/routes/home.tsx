import { ReactComponent as ImgSparks } from '../assets/img--sparks.svg';
import { Button } from '../components/Button';

function HeroSection() {
  return (
    <section className="md:mt-[200px] flex items-center justify-between relative">
      <div>
        <div className="flex flex-col-reverse md:flex-row items-start justify-between">
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-medium">
            Strategize.
            <br />
            Monetize.
            <br />
            <span className="text-brand-blue">Succeed.</span>
          </h1>

          <ImgSparks className="mb-12 md:mb-0 h-[100px] w-[100px] mx-auto  sm:mx-0  sm:h-[50px] sm:w-[50px] md:h-[100px] md:w-[100px]  lg:hidden" />
        </div>
        <p className="xl:w-[50ch] 2xl:w-[55ch] text-lg md:text-xl my-6 sm:mt-8 sm:mb-12">
          Our goal is simple: to help your business succeed online. We'll
          connect you with your audience and turn those online engagements into
          sales.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button to="/contact">Contact Us</Button>
          <Button to="/schedule-discovery-call">Request Discovery Call</Button>
        </div>
      </div>
      <ImgSparks className="hidden lg:block  lg:min-w-[400px] xl:min-w-[600px]" />
    </section>
  );
}



export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
