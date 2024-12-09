import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    });
    
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          <h2 className="font-general text-sm uppercase md:text-sm">
            Welcome To The Valorant World
          </h2>
          <AnimatedTitle />
          
          <div className="about-subtext">
            <p>
              Valorant begins—your tactics, your triumphs, your legend
            </p>
            <p>
              With its immersive world, epic battles, and a vibrant community, Valorant offers a unique and exciting gaming experience.
            </p>
          </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image border border-black">
          <img src="img/about.jpeg" alt="background" className="absolute left-0 top-0 size-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default About
