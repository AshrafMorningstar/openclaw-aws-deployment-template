export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans">
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">O</div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">OpenClaw Managed</h1>
        </div>
        <div className="flex gap-6 items-center">
          <button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition">Documentation</button>
          <div className="h-4 w-px bg-slate-200"></div>
          <button className="text-sm font-medium px-5 py-2.5 bg-slate-900 text-white rounded-lg shadow-sm hover:bg-slate-800 transition">Billing Settings</button>
        </div>
      </nav>

      <div className="flex-1 p-8 max-w-6xl mx-auto w-full mt-6">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Infrastructure</h2>
            <p className="text-slate-500 mt-2 text-lg">Manage your AWS EKS deployed OpenClaw instances seamlessly.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Active Agent Card */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg">1</div>
              <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full">Healthy</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800">Production Agent</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">AWS EKS Cluster • us-east-1</p>
            <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-600">Model: GPT-4o</span>
              <button className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition">Manage →</button>
            </div>
          </div>

          {/* Staging Agent Card */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg">2</div>
              <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full">Idle</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800">Staging Agent</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">AWS EC2 • us-west-2</p>
            <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-600">Model: Claude 3.5</span>
              <button className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition">Manage →</button>
            </div>
          </div>

          {/* Deploy New Agent */}
          <div className="bg-slate-50 p-7 rounded-2xl border-2 border-slate-200 hover:border-blue-400 transition border-dashed cursor-pointer flex flex-col justify-center items-center text-center group">
            <div className="w-14 h-14 bg-white shadow-sm text-blue-600 rounded-full flex items-center justify-center mb-5 text-3xl group-hover:bg-blue-600 group-hover:text-white transition">+</div>
            <h3 className="text-xl font-bold text-slate-700 group-hover:text-blue-600 transition">Deploy New Agent</h3>
            <p className="text-sm text-slate-500 mt-2">Spin up a new EKS pod in seconds</p>
          </div>
        </div>

        {/* API Keys Section */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">API Integrations</h3>
            <button className="text-sm font-semibold text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition">+ Setup New</button>
          </div>

          <div className="space-y-4">
            {['OpenRouter', 'ElevenLabs', 'Brave Search', 'ZAI Engine'].map((api, index) => (
              <div key={api} className="flex justify-between items-center p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="font-semibold text-slate-800">{api} API</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-slate-400">sk_live_...{index}x9</span>
                  <button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition">Update</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
