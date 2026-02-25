export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 px-4 py-10 text-slate-900">
      <main className="mx-auto w-full max-w-6xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">UI Stepper</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Formulario por pasos</h1>
          </div>
          <button className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white">
            Ajustar layout
          </button>
        </header>

        <section className="grid auto-rows-[minmax(140px,_auto)] grid-cols-1 gap-6 md:grid-cols-12">
          <aside className="flex flex-col justify-between gap-6 rounded-[32px] bg-white p-6 shadow-lg md:col-span-4 md:col-start-1 md:row-span-3 md:row-start-1">
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
              </span>
              <span className="text-xs font-medium text-slate-400">Paso a paso</span>
            </div>
            <nav className="flex-1">
              <ol className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <span className="text-xs font-bold">1</span>
                  </span>
                  <div>
                    <p className="text-xs uppercase text-slate-400">Step 1</p>
                    <p className="text-sm font-semibold">Basic Details</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <span className="text-xs font-bold">2</span>
                  </span>
                  <div>
                    <p className="text-xs uppercase text-slate-400">Step 2</p>
                    <p className="text-sm font-semibold">Company Details</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-400 text-indigo-500">
                    <span className="text-xs font-bold">3</span>
                  </span>
                  <div>
                    <p className="text-xs uppercase text-slate-400">Step 3</p>
                    <p className="text-sm font-semibold">Subscription Plan</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-400">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200">
                    <span className="text-xs font-bold">4</span>
                  </span>
                  <div>
                    <p className="text-xs uppercase">Step 4</p>
                    <p className="text-sm font-semibold">Payment Details</p>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-slate-100 bg-indigo-50">
              <svg viewBox="0 0 320 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="stepper-geo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e0e7ff" />
                    <stop offset="100%" stopColor="#f5f3ff" />
                  </linearGradient>
                  <radialGradient id="stepper-glow" cx="0" cy="0" r="1" gradientTransform="translate(70 40) scale(120)">
                    <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#eef2ff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="320" height="120" fill="url(#stepper-geo)" />
                <rect x="0" y="0" width="320" height="120" fill="url(#stepper-glow)" />
                <circle cx="70" cy="55" r="26" fill="#e0f2fe" />
                <circle cx="70" cy="55" r="10" fill="#4f46e5" />
                <path d="M225 120 L280 80 L320 120 Z" fill="#a5b4fc" />
                <path d="M255 120 L300 90 L320 120 Z" fill="#818cf8" />
              </svg>
            </div>
            <footer className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400">
                ?
              </span>
              <div>
                <p className="text-xs text-slate-400">Having troubles?</p>
                <p className="text-sm font-semibold">Contact us</p>
              </div>
            </footer>
          </aside>

          <section className="flex flex-col justify-center gap-4 rounded-[28px] bg-white p-6 shadow-lg md:col-span-8 md:col-start-5 md:row-start-1">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400">
              <span>Step 1</span>
              <span>Step 2</span>
              <span className="text-indigo-600">Step 3</span>
              <span>Step 4</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</div>
              <div className="h-1 flex-1 rounded-full bg-emerald-200" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</div>
              <div className="h-1 flex-1 rounded-full bg-indigo-500" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-indigo-200 bg-white text-indigo-600">
                3
              </div>
              <div className="h-1 flex-1 rounded-full bg-slate-200" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400">
                4
              </div>
            </div>
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Card Details</span>
              <span>Form Review</span>
              <span className="text-indigo-600">Authenticate OTP</span>
              <span className="text-slate-400">Create Code</span>
            </div>
          </section>

          <article className="flex flex-col justify-between gap-4 rounded-[28px] bg-gradient-to-br from-indigo-600 to-indigo-500 p-6 text-white shadow-lg md:col-span-4 md:col-start-5 md:row-start-2">
            <header className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">✓</span>
              <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-emerald-950">
                Completed
              </span>
            </header>
            <div>
              <p className="text-sm text-white/70">Card Details</p>
              <p className="text-lg font-semibold">Form Review</p>
              <p className="mt-2 text-xs text-white/70">
                Application and forms will go through a step by step review process.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-white/20 px-3 py-1">In Progress</span>
              <span className="text-white/70">Step 2</span>
            </div>
          </article>

          <article className="flex flex-col justify-between gap-4 rounded-[28px] bg-white p-6 shadow-lg md:col-span-4 md:col-start-5 md:row-start-3">
            <header className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">✓</span>
              <div>
                <p className="text-xs uppercase text-slate-400">Step 2</p>
                <p className="text-sm font-semibold">Application Review</p>
              </div>
            </header>
            <p className="text-xs text-slate-500">
              Application and forms will go through a step by step review process.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase text-slate-400">Time remaining</p>
              <p className="text-lg font-semibold text-indigo-600">48 hours</p>
              <div className="mt-3 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-2/3 rounded-full bg-indigo-500" />
              </div>
            </div>
          </article>

          <section className="flex flex-col gap-5 rounded-[32px] bg-white p-6 shadow-lg md:col-span-4 md:col-start-9 md:row-span-2 md:row-start-2">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">S</span>
                <div>
                  <p className="text-xs uppercase text-slate-400">Step 4/5</p>
                  <p className="text-sm font-semibold">Payment Details</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-600">In progress</span>
            </header>
            <form className="flex flex-1 flex-col gap-4">
              <fieldset className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400">Card Details</label>
                <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Alex Parkinson" />
                <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="4858 3445 1222 3344" />
                <div className="grid grid-cols-2 gap-3">
                  <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Expiry" />
                  <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="CVV" />
                </div>
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400">Billing Address</label>
                <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Street Address" />
                <div className="grid grid-cols-2 gap-3">
                  <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="City" />
                  <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="State" />
                </div>
              </fieldset>
              <div className="mt-auto flex items-center justify-between">
                <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                  Previous
                </button>
                <button className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">
                  Next
                </button>
              </div>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}
