import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const projects = [
  { title: 'Project 1', img: 'https://via.placeholder.com/300x200', desc: 'Description 1' },
  { title: 'Project 2', img: 'https://via.placeholder.com/300x200', desc: 'Description 2' },
  { title: 'Project 3', img: 'https://via.placeholder.com/300x200', desc: 'Description 3' },
  { title: 'Project 4', img: 'https://via.placeholder.com/300x200', desc: 'Description 4' },
];

export default function ProjectsSlider() {
  return (
    <div className="w-full bg-slate-100 py-10 px-4 text-black">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      {/* Top Slider - left direction */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={`top-${i}`}>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Spacer */}
      <div className="h-10" />

      {/* Bottom Slider - right direction */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={`bottom-${i}`}>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
