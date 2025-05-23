import { html, LitElement } from "lit"

export class HomeElement extends LitElement {
  protected render() {
    return html`
      <div class="flex flex-col min-h-screen bg-[#0d0d1b] text-white font-sans">
        <div class="flex justify-between items-center p-4">
          <div class="text-xl font-medium">9:41</div>
          <div class="flex items-center gap-1">
            <div class="flex items-end gap-0.5">
              <div class="w-1 h-2 bg-white rounded-t-sm"></div>
              <div class="w-1 h-3 bg-white rounded-t-sm"></div>
              <div class="w-1 h-4 bg-white rounded-t-sm"></div>
              <div class="w-1 h-5 bg-white rounded-t-sm"></div>
            </div>
            <div class="flex items-center gap-1 ml-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.5C1 5 4 2 7.5 2H16.5C20 2 23 5 23 8.5V15.5C23 19 20 22 16.5 22H7.5C4 22 1 19 1 15.5V8.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7C15 8.10457 15.8954 9 17 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
              <div class="w-6 h-3 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* User Profile Card */}
        <div class="mx-4 mb-8 bg-[#15162c]/80 backdrop-blur-sm rounded-3xl p-6">
          <div class="flex items-center gap-4 mb-4">
            <div class="relative w-16 h-16 rounded-full overflow-hidden">
              <image
                src="/placeholder.svg?height=64&width=64"
                alt="Profile picture"
                width="{64}"
                height="{64}"
                class="object-cover"
              />
            </div>
            <div>
              <h2 class="text-2xl font-bold">Ali Maktabi</h2>
              <p class="text-[#dadada] text-sm">maktabi876@gmail.com</p>
            </div>
          </div>

          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-[#dadada]">Level</span>
              <span class="font-bold text-lg">3</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[#dadada]">Score</span>
              <span class="font-bold text-lg">150M</span>
            </div>
            <div class="text-[#dadada] text-sm">Level 4 at 500M</div>
          </div>

          <div class="w-full h-2 bg-[#313042] rounded-full overflow-hidden">
            <div class="h-full w-[30%] bg-[#5500ff] rounded-full"></div>
          </div>
        </div>

        {/* Apps Needing Verification */}
        <div class="px-4 mb-8">
          <h2 class="text-3xl font-bold mb-6">Apps needing verification</h2>

          {/* UBI Raffle Verification Card */}
          <div class="bg-[#15162c]/80 backdrop-blur-sm rounded-3xl p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">UBI Raffle Verification</h3>
              <div
                class="bg-[#0093b1] text-white px-4 py-1 rounded-full text-sm"
              >
                In Progress
              </div>
            </div>

            <div class="flex items-center gap-2 mb-4">
              <span class="text-[#15c8ec]">Requires Level:</span>
              <span class="font-bold">4</span>
            </div>

            <div class="flex justify-between items-center mb-2">
              <span>Progress</span>
              <span>2/5 completed</span>
            </div>

            <div
              class="w-full h-2 bg-[#313042] rounded-full overflow-hidden mb-6"
            >
              <div class="h-full w-[40%] bg-[#5500ff] rounded-full"></div>
            </div>

            <button
              class="w-full bg-[#2f6de9] text-white py-4 rounded-xl font-bold text-lg"
            >
              Continue
            </button>
          </div>

          {/* Project Gamma Card */}
          <div class="bg-[#15162c]/80 backdrop-blur-sm rounded-3xl p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">Project Gamma</h3>
              <div
                class="bg-[#059669]/20 text-[#10b981] px-4 py-1 rounded-full text-sm"
              >
                Completed
              </div>
            </div>

            <div class="flex items-center gap-2 mb-8">
              <span class="text-[#15c8ec]">Requires Level:</span>
              <span class="font-bold">3</span>
            </div>

            <div class="flex flex-col items-center">
              <div class="bg-[#10b981] rounded-full p-3 mb-4">
                <Check class="w-6 h-6 text-white" />
              </div>
              <span class="text-[#747474]">Verified on Mar 15, 2025</span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          class="mt-auto bg-[#15162c]/90 backdrop-blur-sm p-4 flex justify-between items-center"
        >
          <button class="p-2">
            <Home class="w-6 h-6 text-white" />
          </button>
          <button class="p-2">
            <Activity class="w-6 h-6 text-[#747474]" />
          </button>
          <button class="p-2">
            <Bell class="w-6 h-6 text-[#747474]" />
          </button>
          <button class="p-2">
            <User class="w-6 h-6 text-[#747474]" />
          </button>
          <button class="p-2">
            <Share2 class="w-6 h-6 text-[#747474]" />
          </button>
        </div>
      </div>
    `
  }
}
