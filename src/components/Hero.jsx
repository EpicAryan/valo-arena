
import { useState,useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [currentIndex,setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);
   
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
       setHasClicked(true);

       setCurrentIndex(upcomingVideoIndex);
    };
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    useEffect(() => {
        if(loadedVideos === totalVideos-1) {
            setIsLoading(false);
        }
    },[loadedVideos])

    useGSAP(() =>{
        if(hasClicked){
            gsap.set("#next-video",{ visibility: "visible" });
            gsap.to('#next-video', {
                transformation: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })

            gsap.from('#current-video', {
                transformation: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    },
    {
        dependencies: [currentIndex],
        revertOnUpdate: true,
    });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: "polygon(14% 0, 72% 0, 80% 80%, -2% 80%)",
            borderRadius: "0% 0% 73% 0%",
        })
        gsap.from('#video-frame',{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    });

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-blue-50">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh overflow-hidden  bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div 
                            onClick={handleMiniVdClick} 
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                autoPlay
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData = {handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video 
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData = {handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc( currentIndex === totalVideos -1? 1 : currentIndex )}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData = {handleVideoLoad}
                    />
                </div>
                <h1 className=" hero-heading absolute bottom-5 right-5 z-40 text-blue-100 tracking-wide">
                    GAMING
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="hero-heading text-blue-100 drop-shadow-2xl tracking-wide">
                            VALORA<b className="">N</b>T
                        </h1>
                        <div className="md:ml-3">
                            <p className="max-w-68 font-robert-regular text-blue-100 font-medium text-sm lg:text-base mb-2">
                                A 5v5 character-based tactical shooter <br /> with ultimate gaming experience
                            </p>
                            <Button id="play-now" title="Play Now" leftIcon={<TiLocationArrow/>} containerClass="!bg-red-secondary flex-center gap-1 border border-black"  />
                        </div>
                        
                    </div>
                </div>
            </div>
            <h1 className=" hero-heading absolute bottom-5 right-5 text-black tracking-wide">
                GAMING
            </h1>
        </div>
    );
};

export default Hero;
