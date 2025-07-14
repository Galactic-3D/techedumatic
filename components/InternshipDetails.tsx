import Link from "next/link"
import { Clock, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Program {
  id: string
  title: string
  description: string
  icon: string
  duration: string
  level: string
  tools: string[]
  projects: string[]
  curriculum: string[]
  prerequisites: string
}

interface InternshipDetailsProps {
  program: Program
  index: number
}

export default function InternshipDetails({ program, index }: InternshipDetailsProps) {
  const isEven = index % 2 === 0

  return (
    <div
      id={program.id}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
    >
      {/* Content */}
      <div className={!isEven ? "lg:col-start-2" : ""}>
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{program.icon}</span>
          <div>
            <h2 className="text-3xl font-bold text-white">{program.title}</h2>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{program.level}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>

        {/* Tools & Technologies */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {program.tools.map((tool, toolIndex) => (
              <span key={toolIndex} className="px-3 py-1 bg-red-900 text-red-200 text-sm rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Prerequisites</h3>
          <p className="text-gray-300">{program.prerequisites}</p>
        </div>

        <Button asChild size="lg" className="text-lg px-8 py-3 bg-red-600 hover:bg-red-700 text-white">
          <Link href="/apply">
            Apply for {program.title} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>

      {/* Details Panel */}
      <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-red-400" />
              Key Projects
            </h3>
            <ul className="space-y-2">
              {program.projects.map((project, projectIndex) => (
                <li key={projectIndex} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{project}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Curriculum Highlights</h3>
            <ul className="space-y-2">
              {program.curriculum.slice(0, 5).map((item, currIndex) => (
                <li key={currIndex} className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
              {program.curriculum.length > 5 && (
                <li className="text-red-400 text-sm font-medium ml-5">+{program.curriculum.length - 5} more topics</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
