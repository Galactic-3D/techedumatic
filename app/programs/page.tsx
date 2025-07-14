import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import InternshipDetails from "@/components/InternshipDetails"

const programs = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Dive deep into artificial intelligence and machine learning with comprehensive training covering neural networks, deep learning, natural language processing, and computer vision. Build real-world AI applications and work on industry-relevant projects.",
    icon: "🤖",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter Notebooks", "OpenCV"],
    projects: [
      "Image Classification System",
      "Chatbot Development",
      "Predictive Analytics Dashboard",
      "Computer Vision Application",
    ],
    curriculum: [
      "Python Programming Fundamentals",
      "Statistics and Linear Algebra",
      "Machine Learning Algorithms",
      "Deep Learning and Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "MLOps and Model Deployment",
    ],
    prerequisites: "Basic programming knowledge, Mathematics background",
  },
  {
    id: "vlsi",
    title: "VLSI Design",
    description:
      "Master Very Large Scale Integration design with hands-on experience in digital circuit design, analog design, and semiconductor device physics. Learn industry-standard EDA tools and work on chip design projects.",
    icon: "🔬",
    duration: "10 weeks",
    level: "Advanced",
    tools: ["Cadence Virtuoso", "Synopsys Design Compiler", "Verilog HDL", "SPICE", "Layout Editor"],
    projects: [
      "Digital Logic Circuit Design",
      "Analog Circuit Design",
      "Memory Design Project",
      "Full Custom IC Layout",
    ],
    curriculum: [
      "Digital Logic Design",
      "Verilog HDL Programming",
      "Analog Circuit Design",
      "CMOS Technology",
      "Physical Design Flow",
      "Verification and Testing",
      "Low Power Design Techniques",
    ],
    prerequisites: "Electronics Engineering background, Circuit Analysis knowledge",
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description:
      "Develop expertise in embedded systems programming, microcontroller interfacing, and IoT device development. Work with real hardware and build connected devices for various applications.",
    icon: "⚡",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    tools: ["Arduino IDE", "Raspberry Pi", "C/C++", "FreeRTOS", "Proteus", "KiCad"],
    projects: ["IoT Weather Station", "Home Automation System", "Robotic Control System", "Sensor Data Logger"],
    curriculum: [
      "Microcontroller Architecture",
      "C Programming for Embedded",
      "Sensor Interfacing",
      "Communication Protocols",
      "Real-time Operating Systems",
      "IoT Development",
      "PCB Design Basics",
    ],
    prerequisites: "Basic programming knowledge, Electronics fundamentals",
  },
  {
    id: "3d-cad",
    title: "3D Design & CAD",
    description:
      "Master 3D modeling, product design, and computer-aided design using industry-standard software. Learn mechanical design principles and create professional engineering drawings and prototypes.",
    icon: "🎨",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    tools: ["SolidWorks", "AutoCAD", "Fusion 360", "Blender", "KeyShot", "ANSYS"],
    projects: [
      "Mechanical Component Design",
      "Product Assembly Modeling",
      "Technical Drawing Creation",
      "3D Printing Project",
    ],
    curriculum: [
      "CAD Software Fundamentals",
      "3D Modeling Techniques",
      "Technical Drawing Standards",
      "Assembly Design",
      "Simulation and Analysis",
      "3D Printing and Prototyping",
      "Design for Manufacturing",
    ],
    prerequisites: "Basic computer skills, Engineering drawing knowledge helpful",
  },
]

export default function Programs() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Internship Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill-based training programs designed to prepare you for a successful engineering career.
            Each program includes hands-on projects, industry mentorship, and Galactic 3D certification.
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-16">
          {programs.map((program, index) => (
            <InternshipDetails key={program.id} program={program} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-900 via-black to-orange-900 rounded-2xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Internship?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your track and start your journey towards becoming a skilled engineer. All programs include Galactic
            3D certification and career support.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3 bg-red-600 hover:bg-red-700 text-white">
            <Link href="/apply">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
