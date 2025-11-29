 import { BookOpen, GraduationCap, Users } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description:
        "Engage with hands-on lessons,live mentorship, individual doubut sessions, and projects designed to make learning practical and fun.",
    },
    {
      icon: GraduationCap,
      title: "Certified Learning",
      description:
        "Earn industry-recognized certificates that boost your career and validate your skills.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Learn directly from experienced mentors and join a supportive community of learners worldwide.",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Decorative blurred accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Why LearnNova?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to succeed, built with modern technology and guided by expert mentors.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-10 rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}   