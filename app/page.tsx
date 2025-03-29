export default function Home() {
  return (
    <div className="h-screen bg-indigo-700">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Instantly understand any neighborhood before you move.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-indigo-200">
            Paste an address or neighborhood name and get an AI-generated summary with insights on
            safety, cost, and lifestyle—no accounts, no fluff.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/check"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Try it now
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              How it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
