export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Chrome Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Which Extensions<br />Are Eating Your RAM
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time memory profiling for every Chrome extension you have installed.
          Detect leaks, spot hogs, and reclaim your browser performance.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works on Chrome &amp; Chromium browsers.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Per-Extension Metrics</h3>
            <p className="text-sm text-[#8b949e]">See exact MB consumed by each extension, updated every 30 seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Leak Detection</h3>
            <p className="text-sm text-[#8b949e]">Automatic alerts when an extension's memory grows without releasing.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-semibold text-white mb-1">Smart Suggestions</h3>
            <p className="text-sm text-[#8b949e]">Ranked list of extensions to disable for the biggest RAM savings.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Real-time memory dashboard',
              'Memory leak alerts',
              'Historical usage charts',
              'Disable recommendations',
              'Web dashboard + extension popup',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $7/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does it measure extension memory?</h3>
            <p className="text-sm text-[#8b949e]">The Chrome extension uses the <code className="text-[#58a6ff]">chrome.processes</code> API to read the memory footprint of each extension process directly from the browser — no guessing, no sampling hacks.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Is my browsing data sent anywhere?</h3>
            <p className="text-sm text-[#8b949e]">No. Only memory metrics (extension name + MB used) are synced to your private dashboard. URLs, tabs, and browsing history never leave your device.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Which browsers are supported?</h3>
            <p className="text-sm text-[#8b949e]">Chrome and any Chromium-based browser (Edge, Brave, Arc) that supports the Chrome Extensions API v3.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Extension Memory Profiler. All rights reserved.
      </footer>
    </main>
  )
}
