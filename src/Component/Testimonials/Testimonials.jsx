const testimonials = [
  {
    name: "Rafiq Ahmed",
    role: "Student",
    feedback:
      "Digital Life Lessons helped me develop better habits and focus on what really matters. I feel more productive every day!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Nafisa Khan",
    role: "Freelancer",
    feedback:
      "The lessons are practical and easy to apply. My digital discipline has improved a lot since I started following these lessons.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Tanvir Hossain",
    role: "Entrepreneur",
    feedback:
      "I love how actionable the advice is. It’s not just motivation, but real steps to improve life and work digitally.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What Our <span className="text-indigo-600">Learners Say</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hear from learners who have transformed their digital life with our
            lessons.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-slate-100 dark:bg-slate-900 hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testi.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testi.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                {testi.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
