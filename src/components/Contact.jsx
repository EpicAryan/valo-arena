import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-[70vh] w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden shadow-xl shadow-gray-600">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
           src='/img/image.webp'
           clipClass="contact-clip-path-1 md:scale-150"
          />
          <ImageClipBox
           src='/img/contact-item.webp'
           clipClass="contact-clip-path-2 lg:translate-y-52 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          
          <ImageClipBox
            src="/img/sova.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 font-general text-base text-blue-75 uppercase font-semibold">
            Join Valo-Arena
          </p>

          <AnimatedTitle 
              title="Show your skills in <br /> Valo Arena—where <br />champions are made!"
              containerClass=" !text-3xl md:!text-[5rem] w-full !leading-[.8] md:!leading-none"
          />
          <Button title="contact us" containerClass="mt-16 cursor-pointer shadow-xl shadow-gray-400/40 hover:bg-red-primary hover:shadow-red-primary/40" titleClass="text-sm font-medium"/>
        </div>
      </div>
    </div>
  )

}

export default Contact
