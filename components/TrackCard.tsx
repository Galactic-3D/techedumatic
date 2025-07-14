import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Track {
  title: string
  description: string
  icon: string
  duration: string
  tools: string[]
}

interface TrackCardProps {
  track: Track
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-700 hover:border-red-500">
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{track.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{track.description}</p>

      <div className="flex items-center justify-center mb-4 text-sm text-gray-400">
        <Clock className="w-4 h-4 mr-1" />
        <span>{track.duration}</span>
      </div>

      <div className="mb-6">
        <div className="text-xs font-semibold text-gray-300 mb-2">Tools & Technologies:</div>
        <div className="flex flex-wrap gap-1">
          {track.tools.slice(0, 3).map((tool, index) => (
            <span key={index} className="px-2 py-1 bg-red-900 text-red-200 text-xs rounded-full">
              {tool}
            </span>
          ))}
          {track.tools.length > 3 && (
            <span className="px-2 py-1 bg-orange-900 text-orange-200 text-xs rounded-full">
              +{track.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Button asChild className="w-full" size="sm">
          <Link href="/apply">
            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full bg-transparent text-red-400 border-red-600 hover:bg-red-900"
          size="sm"
        >
          <Link href="/programs">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
