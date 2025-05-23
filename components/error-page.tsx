export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-16">
          <h1 className="text-[#333333] text-7xl font-light mb-2">Error 524</h1>
          <div className="flex items-center gap-2 text-gray-500 text-xl">
            <span>Ray ID: 4bbddc9a5ee769dd</span>
            <span>•</span>
            <span>2019-03-23 05:05:36 UTC</span>
          </div>
          <h2 className="text-[#333333] text-3xl font-light mt-4">
            A timeout occurred
          </h2>
        </div>

        <div className="bg-[#f1f1f1] py-16 px-4 rounded-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            {/* Browser */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-20 bg-gray-400 rounded-md flex items-start justify-start p-1">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#9BCA3B] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="text-lg">You</div>
                <div className="text-xl text-gray-500">Browser</div>
                <div className="text-xl text-[#9BCA3B]">Working</div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </div>
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400 rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </div>

            {/* Cloudflare */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-20 h-16 bg-gray-400 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#9BCA3B] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="text-lg">London</div>
                <div className="text-xl text-gray-500">Cloudflare</div>
                <div className="text-xl text-[#9BCA3B]">Working</div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400 rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Host */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-20 bg-gray-400 rounded-md flex items-start justify-start p-1">
                  <div className="w-full h-3 bg-white rounded-sm"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#ED4B48] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="text-lg">gajananulhamale.com</div>
                <div className="text-xl text-gray-500">Host</div>
                <div className="text-xl text-[#ED4B48]">Error</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
