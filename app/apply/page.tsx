import ApplicationForm from "@/components/ApplicationForm"

export default function Apply() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Apply for Internship</h1>
            <p className="text-xl text-gray-300">
              Take the first step towards your engineering career. Fill out the application form below and we'll get
              back to you within 48 hours.
            </p>
          </div>

          {/* Application Form */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
            <ApplicationForm />
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <div className="text-3xl mb-3 text-red-400">📋</div>
              <h3 className="text-lg font-semibold text-white mb-2">Application Review</h3>
              <p className="text-gray-300 text-sm">
                We review all applications within 48 hours and contact qualified candidates
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <div className="text-3xl mb-3 text-red-400">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Interview Process</h3>
              <p className="text-gray-300 text-sm">
                Selected candidates will have a brief technical interview and program orientation
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
              <div className="text-3xl mb-3 text-red-400">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Program Start</h3>
              <p className="text-gray-300 text-sm">
                New batches start every month. You'll receive your schedule upon acceptance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
