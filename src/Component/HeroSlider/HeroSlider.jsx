// import { useState, useEffect } from "react";

// const slides = [
//   {
//     title: "Life Teaches What Books Cannot",
//     text: "Every mistake, every failure, every delay carries a lesson. Learn from real experiences shared by real people.",
//     image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
//   },
//   {
//     title: "Growth Begins Outside Comfort",
//     text: "True growth starts when comfort ends. Life lessons are learned through courage, pain, and patience.",
//     image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//   },
//   {
//     title: "Experience Is The Greatest Teacher",
//     text: "You don’t fail in life. You either win or learn. Discover stories that shape mindset and purpose.",
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//   },
// ];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[90vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

//           {/* Content */}
//           <div className="relative z-10 h-full flex items-center">
//             <div className="max-w-5xl mx-auto px-6 text-center">
//               <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//                 {slide.title}
//               </h1>

//               <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
//                 {slide.text}
//               </p>

//               <div className="mt-10 flex justify-center gap-4">
//                 <button className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition">
//                   Explore Lessons
//                 </button>
//                 <button className="px-8 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition">
//                   Share Your Story
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition ${
//               current === index ? "bg-white scale-110" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

import { useState, useEffect } from "react";
import { Link } from "react-router";

const slides = [
  {
    title: "Real Life Lessons Shape Real Growth",
    text: "Life doesn’t teach through comfort. Every struggle, failure, and delay carries a lesson that shapes who you become. Learn from real-life experiences that truly matter.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
  },
  {
    title: "Mistakes Are Lessons in Disguise",
    text: "You don’t lose in life—you learn. Digital Life Lessons shares stories of mistakes, resilience, and mindset shifts that turn pain into personal growth.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Experience Is the Best Teacher",
    text: "Books inspire, but life transforms. Discover powerful life lessons drawn from real experiences that help you think wiser, grow stronger, and live better.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                {slide.text}
              </p>

              <div className="mt-10 flex justify-center gap-4">
                <Link
                  to={"/public-lessons"}
                  className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                  Explore Life Lessons
                </Link>
                <Link
                  to={"/dashboard/add-lesson"}
                  className="px-8 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
                >
                  Share Your Lesson
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
