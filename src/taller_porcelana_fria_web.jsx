import { useEffect, useMemo, useState } from "react";

function getObjetivoCardClassName(index) {
  const styles = [
    "rounded-3xl border-2 p-5 border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/30",
    "rounded-3xl border-2 p-5 border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/30",
    "rounded-3xl border-2 p-5 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/30",
    "rounded-3xl border-2 p-5 border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/30",
  ];

  return styles[index % styles.length];
}

function runDevChecks() {
  const sampleClasses = [
    getObjetivoCardClassName(0),
    getObjetivoCardClassName(1),
    getObjetivoCardClassName(2),
    getObjetivoCardClassName(3),
    getObjetivoCardClassName(4),
  ];

  console.assert(
    sampleClasses[0] === "rounded-3xl border-2 p-5 border-pink-200 bg-pink-50",
    "Test failed: style for index 0 should be pink",
  );
  console.assert(
    sampleClasses[1] === "rounded-3xl border-2 p-5 border-cyan-200 bg-cyan-50",
    "Test failed: style for index 1 should be cyan",
  );
  console.assert(
    sampleClasses[2] ===
      "rounded-3xl border-2 p-5 border-yellow-200 bg-yellow-50",
    "Test failed: style for index 2 should be yellow",
  );
  console.assert(
    sampleClasses[3] ===
      "rounded-3xl border-2 p-5 border-violet-200 bg-violet-50",
    "Test failed: style for index 3 should be violet",
  );
  console.assert(
    sampleClasses[4] === sampleClasses[0],
    "Test failed: styles should wrap around after index 3",
  );
}

runDevChecks();

const THEME_STORAGE_KEY = "taller-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function TallerPorcelanaFriaWeb() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleLabel = useMemo(
    () =>
      theme === "dark"
        ? "Cambiar a modo claro"
        : "Cambiar a modo oscuro",
    [theme],
  );

  const objetivos = [
    "Desarrollar la creatividad y la imaginación.",
    "Estimular la expresión artística personal.",
    "Integrar artes plásticas, escritura y animación.",
    "Aprender a construir personajes con identidad propia.",
    "Fomentar la narración de historias y el pensamiento creativo.",
  ];

  const programa = [
    {
      clase: "Clase 1 – Introducción y diseño del personaje",
      descripcion:
        "Presentación del taller. Ideas para crear personajes. Bocetos y planificación del personaje.",
      emoji: "✏️",
    },
    {
      clase: "Clase 2 – Modelado en porcelana fría (parte 1)",
      descripcion:
        "Construcción básica del personaje: estructura, proporciones y primeras formas.",
      emoji: "🧸",
    },
    {
      clase: "Clase 3 – Modelado en porcelana fría (parte 2)",
      descripcion:
        "Detalles, expresión del rostro, postura y personalidad del personaje.",
      emoji: "🎨",
    },
    {
      clase: "Clase 4 – Construcción del mundo del personaje",
      descripcion:
        "Creación de la historia: quién es, de dónde viene, qué le sucede. Desarrollo narrativo y creativo.",
      emoji: "🌈",
    },
    {
      clase: "Clase 5 – Introducción a la animación",
      descripcion:
        "Principios básicos de animación. Cómo preparar al personaje para animarlo.",
      emoji: "🎬",
    },
    {
      clase: "Clase 6 – Animación del personaje (parte 1)",
      descripcion: "Primeros movimientos y creación de pequeñas escenas.",
      emoji: "✨",
    },
    {
      clase: "Clase 7 – Animación del personaje (parte 2)",
      descripcion:
        "Continuación del trabajo de animación y desarrollo de la escena.",
      emoji: "🎥",
    },
    {
      clase: "Clase 8 – Finalización y presentación",
      descripcion:
        "Edición básica, presentación de las animaciones y cierre del taller.",
      emoji: "🎉",
    },
  ];

  const materiales = [
    "Porcelana fría",
    "Pinturas acrílicas, colores primarios",
    "Alambre fino",
    "El resto de las herramientas estarán disponibles en el taller. Quienes lo deseen podrán adquirir sus propias herramientas más adelante.",
  ];

  const horarios = [
    { titulo: "Turno matutino", hora: "10:00 a 14:00 hs", icono: "☀️" },
    { titulo: "Turno vespertino", hora: "14:30 a 18:30 hs", icono: "🌤️" },
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
      <header className="border-b-4 border-pink-100 bg-gradient-to-b from-orange-100 via-pink-100 to-sky-100 dark:border-slate-700 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="header-actions">
            <button
              type="button"
              aria-label={toggleLabel}
              aria-pressed={theme === "dark"}
              className="inline-flex items-center gap-4 rounded-full border-2 border-white bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:shadow-slate-950/50 dark:hover:shadow-slate-950/70"
              onClick={() => {
                setTheme((currentTheme) =>
                  currentTheme === "dark" ? "light" : "dark",
                );
              }}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
              <span>{theme === "dark" ? "Modo claro" : "Modo oscuro"}</span>
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border-2 border-pink-300 bg-white px-5 py-2 text-sm font-bold text-pink-700 dark:border-pink-700 dark:bg-slate-800 dark:text-pink-300">
                Taller creativo · Nivel principiante · 2 meses
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Taller de Creación de Personajes y Animación
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                Un taller para imaginar, modelar y dar vida a personajes en
                porcelana fría. Cada participante creará su propio personaje,
                inventará su historia y realizará una pequeña animación final.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
                Puede ser un personaje original o inspirado en uno existente. No
                se requieren conocimientos previos: solo curiosidad, ganas de
                crear y un poquito de caos artístico del bueno.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-3xl border-2 border-yellow-300 bg-white px-5 py-4 dark:border-yellow-700 dark:bg-slate-800">
                  <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                    📅 Inicio
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                    Sábado 11 de abril
                  </p>
                </div>
                <div className="rounded-3xl border-2 border-cyan-300 bg-white px-5 py-4 dark:border-cyan-700 dark:bg-slate-800">
                  <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                    💡 No hace falta experiencia
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                    Pensado para principiantes
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-4 border-white bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-pink-100 p-5 dark:bg-pink-900/30">
                  <p className="text-sm font-black uppercase tracking-wide text-pink-700 dark:text-pink-300">
                    🧁 Qué vas a hacer
                  </p>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                    Diseñar un personaje, modelarlo en porcelana fría, crear su
                    historia y animarlo en una pequeña escena.
                  </p>
                </div>
                <div className="rounded-3xl bg-cyan-100 p-5 dark:bg-cyan-900/30">
                  <p className="text-sm font-black uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
                    🌟 Para quién es
                  </p>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                    Para personas con ganas de crear, inventar mundos y explorar
                    el arte desde un lugar práctico y divertido.
                  </p>
                </div>
                <div className="rounded-3xl bg-yellow-100 p-5 dark:bg-yellow-900/30">
                  <p className="text-sm font-black uppercase tracking-wide text-amber-700 dark:text-yellow-300">
                    🎈 Qué combina
                  </p>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                    Artes plásticas, escritura creativa y animación en un solo
                    recorrido lleno de personajes raritos y hermosos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border-4 border-white bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Sobre el taller
            </h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              En este taller cada participante creará su propio personaje en
              porcelana fría. A partir de esa creación desarrollaremos su
              historia y finalmente realizaremos una pequeña animación.
            </p>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              La propuesta integra modelado, imaginación, narrativa y movimiento
              para que cada personaje tenga forma, identidad y una pequeña vida
              en pantalla.
            </p>
          </div>

          <div className="rounded-3xl border-4 border-white bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Horarios</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {horarios.map((horario) => (
                <div
                  key={horario.titulo}
                  className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-5 dark:border-violet-800 dark:bg-violet-900/30"
                >
                  <p className="text-2xl">{horario.icono}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    {horario.titulo}
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                    {horario.hora}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border-4 border-white bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Objetivos del taller
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objetivos.map((objetivo, index) => {
              const cardClassName = getObjetivoCardClassName(index);

              return (
                <div
                  key={objetivo}
                  className={`${cardClassName} dark:border-slate-600 dark:bg-slate-800`}
                >
                  <p className="text-base font-semibold leading-7 text-slate-700 dark:text-slate-300">
                    {objetivo}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Programa del curso
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Ocho encuentros para pasar de una idea a un personaje animado con
              historia propia.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {programa.map((item, index) => (
              <article
                key={item.clase}
                className="rounded-3xl border-4 border-white bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-200 text-2xl dark:bg-pink-800">
                    {item.emoji}
                  </div>
                  <div>
                    <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      Clase {index + 1}
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold text-slate-900 dark:text-white">
                      {item.clase}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border-4 border-white bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Materiales necesarios
            </h2>
            <ul className="mt-5 space-y-4">
              {materiales.map((material, index) => (
                <li
                  key={material}
                  className="flex gap-4 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-slate-700"
                >
                  <span className="mt-0.5 text-xl">
                    {index === 0
                      ? "🧁"
                      : index === 1
                        ? "🖌️"
                        : index === 2
                          ? "🧵"
                          : "🧰"}
                  </span>
                  <span className="leading-7 text-slate-700 dark:text-slate-300">{material}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-4 border-white bg-pink-500 p-8 text-white dark:bg-pink-900 dark:border-pink-800">
            <h2 className="text-2xl font-black dark:text-white">Resumen rápido</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-pink-400 p-4 dark:bg-pink-800">
                <p className="text-sm font-bold uppercase tracking-wide text-pink-50 dark:text-pink-200">
                  Nivel
                </p>
                <p className="mt-1 text-lg font-extrabold dark:text-white">Principiante</p>
              </div>
              <div className="rounded-2xl bg-pink-400 p-4 dark:bg-pink-800">
                <p className="text-sm font-bold uppercase tracking-wide text-pink-50 dark:text-pink-200">
                  Duración
                </p>
                <p className="mt-1 text-lg font-extrabold dark:text-white">2 meses</p>
              </div>
              <div className="rounded-2xl bg-pink-400 p-4 dark:bg-pink-800">
                <p className="text-sm font-bold uppercase tracking-wide text-pink-50 dark:text-pink-200">
                  Inicio
                </p>
                <p className="mt-1 text-lg font-extrabold dark:text-white">
                  Sábado 11 de abril
                </p>
              </div>
              <div className="rounded-2xl bg-pink-400 p-4 dark:bg-pink-800">
                <p className="text-sm font-bold uppercase tracking-wide text-pink-50 dark:text-pink-200">
                  Horarios
                </p>
                <p className="mt-1 text-lg font-extrabold dark:text-white">
                  10:00 a 14:00 hs · 14:30 a 18:30 hs
                </p>
              </div>
              <div className="rounded-2xl bg-pink-400 p-4 dark:bg-pink-800">
                <p className="text-sm font-bold uppercase tracking-wide text-pink-50 dark:text-pink-200">
                  Requisitos previos
                </p>
                <p className="mt-1 text-lg font-extrabold dark:text-white">
                  No se requieren conocimientos previos
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
