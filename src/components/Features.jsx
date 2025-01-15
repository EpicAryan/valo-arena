import { TiLocationArrow } from "react-icons/ti"
import {BentoCard, BentoTilt} from "./BentoCard"

const Features = () => {
  return (
    <section id="arena" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-blue-50 font-circular-web text-xl">
            Way to Valorant Arena
          </p>
          <p className="max-w-md font-circular-web text-blue-50 text-xl opacity-50">
            Join over 10 million players worldwide, challenge your friends, and face off in the most challenging battles in Valorant.
          </p>
        </div>
        <BentoTilt className="w-full h-[65vh] md:h-[70vh] border-hsla rounded-xl relative mb-10 overflow-hidden">
          <BentoCard 
            src="videos/feature-1.webm"
            title = {<>radiant</>}
            description = "Face off in the most challenging battles in Valorant. See how radiant players defeat their enemies and gain the ultimate reward"
            hoverPlay={true}
          />
        </BentoTilt>
        <div className="grid h-[140vh] grid-cols-2 grid-rows-3 gap-10">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
            <BentoCard 
              src="videos/feature-2.webm"
              title = {<>Agents</>}
              description = "Unleash the power of unique Valorant agents, each armed with game-changing abilities and personalities that redefine every battle!"
              autoPlay={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              src="videos/feature-3.webm"
              title = {<>community</>}
              description = "Connect with fellow Valorant players, share your experiences, and learn from each other. Join the Valorant community today!"
              autoPlay={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 me-24 md:me-0">
            <BentoCard
              src="videos/feature-4.webm"
              title = {<>Arsenal</>}
              description = "Master Valorant’s lethal weapons and game-changing ultimates to dominate every battle!"
              autoPlay={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-red-secondary p-5">
              <h1 className="bento-title md:!text-7xl !text-4xl max-w-64 text-black">Additional sections launching soon</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end"/>
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.webm"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features
