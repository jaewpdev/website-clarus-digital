import { Helmet } from 'react-helmet';

import { ReactComponent as ImgSparks } from '../assets/img--sparks.svg';
import ImgIdentification from '../assets/img--identification.png';
import ImgStrategy from '../assets/img--strategy.png';
import ImgLead from '../assets/img--lead.png';
import ImgFollowUp from '../assets/img--followup.png';
import ImgProfit from '../assets/img--profit.png';

import { Button } from '../components/Button';

function HeroSection() {
  return (
    <section className="md:mt-[200px] flex flex-col-reverse  md:flex-col items-center justify-between relative lg:gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl xl:text-9xl font-medium text-center">
          Uncover Your <br /> Growth Potential
        </h1>

        <p className="max-w-[50ch] 2xl:max-w-[55ch] text-center text-lg md:text-xl my-6 sm:mt-8 sm:mb-12">
          Our goal is simple: to help your business succeed online. We'll
          connect you with your audience and turn those online engagements into
          sales.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button to="/contact" fullWidth>
            Contact Us
          </Button>
          <Button to="/schedule-discovery-call" variant="secondary" fullWidth>
            Request Discovery Call
          </Button>
        </div>
      </div>
      <ImgSparks className="max-h-[150px]  md:max-h-[350px] lg:max-h-[500px]" />
    </section>
  );
}

function StepsSection() {
  const steps = [
    {
      title: 'Identification',
      description:
        "You have a great business, but reaching the right online audience feels overwhelming, or maybe you don't have an online presence at all.",
      imgSrc: ImgIdentification,
    },
    {
      title: 'Strategy & Implementation',
      description:
        "That's where we come in. We jumpstart your online presence with expertly targeted Google or Facebook ads. We'll manage PPC campaigns and implement strategic retargeting as needed.",
      imgSrc: ImgStrategy,
    },
    {
      title: 'Lead Capture',
      description:
        'We then build a user-friendly and highly effective website funnel. This is your 24/7 net, designed to capture interested leads effortlessly.',
      imgSrc: ImgLead,
    },
    {
      title: 'Follow-Up & Conversion',
      description:
        "We won't stop there. We'll help ensure these leads are followed up with, improving the likelihood of converting them into paying customers.",
      imgSrc: ImgFollowUp,
    },
    {
      title: 'Profit & Growth',
      description:
        "With everything in place, you can enjoy seeing your profits grow. And as your business expands, we'll be there to continuously optimize and improve.",
      imgSrc: ImgProfit,
    },
  ];

  return (
    <section>
      <h2 className="text-4xl sm:text-5xl xl:text-6xl font-medium mt-32 mb-12">
        Your Growth Journey with Us
      </h2>
      <p className="max-w-[60ch] text-lg md:text-xl my-6 sm:mt-8 sm:mb-20">
        Discover how we transform your online presence into a powerful growth
        engine. Our clear, effective process turns complexity into simplicity,
        helping you navigate the digital landscape with confidence.
      </p>
      <ul className="flex flex-wrap items-center gap-16 justify-center">
        {steps.map(({ title, description, imgSrc }, index) => (
          <li key={title} className="w-[400px] min-h-[450px] rounded-lg flex flex-col p-8 shadow-md">
              <img src={imgSrc} alt={title} className="mb-8 aspect-square w-1/2 mx-auto" />
              <h6 className="text-lg font-medium mb-2">{index + 1}. {title}</h6>
              <p className="text-gray-500">{description}</p>
          </li>
        ))}
      </ul>
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
      <StepsSection />
      <div className="h-[1000px]" />
    </>
  );
}
