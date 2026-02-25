export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-200 px-4 py-10 text-zinc-900">
      <main className="mx-auto w-full max-w-6xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Componentes</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Grid con 5 bloques flex</h1>
          </div>
          <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold transition hover:bg-zinc-900 hover:text-white">
            Editar layout
          </button>
        </header>

        <section className="grid auto-rows-[minmax(160px,_auto)] grid-cols-1 gap-6 md:grid-cols-6">
          <article className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm md:col-span-3 md:col-start-4 md:row-start-1">
            <div className="flex items-end justify-between">
              <h2 className="text-xl font-semibold">Panel principal</h2>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Activo
              </span>
            </div>
            <p className="text-sm text-zinc-600">
              Bloque flexible con espacio para cambiar su tamano y posicion dentro del grid.
            </p>
            <div className="flex items-center gap-3">
              <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
                Ver detalles
              </button>
              <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold">
                Mover
              </button>
            </div>
          </article>

          <aside className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-6 md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Resumen rapido</h2>
              <span className="text-xs text-zinc-500">Semana</span>
            </div>
            <ul className="flex flex-1 flex-col justify-between gap-3">
              <li className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3">
                <span className="text-sm font-medium">Componentes</span>
                <strong className="text-lg">05</strong>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3">
                <span className="text-sm font-medium">Posiciones</span>
                <strong className="text-lg">12</strong>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3">
                <span className="text-sm font-medium">Tamanos</span>
                <strong className="text-lg">08</strong>
              </li>
            </ul>
            <footer className="flex items-center justify-between text-xs text-zinc-500">
              <span>Actualizado hoy</span>
              <button className="font-semibold text-zinc-900">Ver todo</button>
            </footer>
          </aside>

          <section className="flex flex-col justify-between gap-4 rounded-3xl bg-zinc-900 p-6 text-white md:col-span-2 md:col-start-4 md:row-start-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Tarjeta oscura</h2>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs">Flexible</span>
            </div>
            <p className="text-sm text-white/70">
              Ideal para cambiar su altura y moverla entre columnas.
            </p>
            <div className="flex items-center gap-2">
              <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900">
                Ajustar
              </button>
              <button className="rounded-full border border-white/30 px-4 py-2 text-xs">
                Reordenar
              </button>
            </div>
          </section>

          <article className="flex flex-col gap-4 rounded-3xl border border-dashed border-zinc-300 bg-white p-6 md:col-span-2 md:col-start-4 md:row-start-3">
            <header className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Zona libre</h2>
              <span className="text-xs text-zinc-400">Drag</span>
            </header>
            <div className="flex flex-1 items-end justify-between">
              <div>
                <p className="text-sm text-zinc-600">Usa este espacio para probar variantes.</p>
                <time className="text-xs text-zinc-400">25 Feb 2026</time>
              </div>
              <button className="rounded-lg bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-700">
                Expandir
              </button>
            </div>
          </article>

          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-amber-50 p-6 md:col-span-1 md:col-start-6 md:row-span-2 md:row-start-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Notas</h2>
              <span className="text-xs text-amber-700">Flexible</span>
            </div>
            <p className="text-sm text-amber-800">
              Cambia su ancho o mueve este bloque para probar distintas posiciones.
            </p>
            <form className="flex items-center gap-2">
              <input
                className="flex-1 rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs"
                placeholder="Escribe una idea"
              />
              <button className="rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold text-white">
                Guardar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
