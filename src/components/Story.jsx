import { useRef } from "react"
import AnimatedTitle from "./AnimatedTitle"
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
            gsap.to(element, {
              duration: 0.3,
              rotateX: 0,
              rotateY: 0,
              ease: "power1.inOut",
            });
          }
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: "power1.inOut"
        })
    };

  return (
    <section id="maps" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex flex-col size-full items-center py-10 pb-24">
            <p className="font-general text-sm md:text-base uppercase font-semibold">
                Way to Valorant Arena
            </p>
            <div className="relative size-full">
                <AnimatedTitle
                    title="U<b>n</b>v<b>e</b>il Se<b>c</b>r<b>e</b>ts of <br /> V<b>a</b>l<b>o</b>r<b>a</b>nt Sit<b>e</b>s"
                    sectionId = "#story"
                    containerClass=" mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="md:story-img-content">
                            <img 
                                ref = {frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src="/img/story.webp" 
                                alt="entrance" 
                                className="object-contain" 
                            />
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>
            <div className = '-mt-96 flex w-full justify-center md:-mt-64 md:me-96 md:justify-end'>
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className="mt-3 max-w-sm text-center font-circular-web text-blue-75 md:text-start text-lg ">
                        Valorant maps offer dynamic battlegrounds, each with unique layouts and strategic challenges to master
                    </p>
                    <a href="https://playvalorant.com/en-us/maps/" target="_blank" rel="noopener noreferrer">
                        <Button
                        id="realm-button" title="discover Maps" containerClass='mt-5 shadow-xl shadow-gray-400/40 hover:bg-red-primary hover:shadow-red-primary/40' titleClass='text-sm font-medium'
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Story
