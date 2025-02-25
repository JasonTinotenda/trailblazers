import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.",
    name: "Judith Black",
    title: "CEO of Workcation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "This church group has truly changed my life. I have grown spiritually and made lifelong friends!",
    name: "Michael Johnson",
    title: "Young Adult Leader",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The community here is so welcoming. It feels like a second family, and I'm grateful for it every day!",
    name: "Sarah Williams",
    title: "Church Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function TestimonialsSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-8 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl relative">
        <h2 className="text-base font-semibold text-orange-600">Read Testimonies</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
          From the Community          
        </p>
        <p className="mt-6 text-lg text-gray-600">
          Stay up to date with the latest news and stories from the Trailblazers community.
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.figure 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src={testimonial.image}
                    className="mx-auto size-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
