import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Michael Liang
          </h1>
          <div className="flex gap-3 text-sm">
            <Link href="mailto:michaelliang875@gmail.com" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              email
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <Link href="https://www.linkedin.com/in/michael-liang8/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              linkedin
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <Link href="https://github.com/mili118" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              github
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <article className="space-y-4 leading-relaxed mb-16 text-sm">
          <p>
            Greetings! I&apos;m Michael and I study Computer Engineering at UC San Diego. I'm interested in building smarter decentralized systems.
          </p>

          <p>
             I&apos;m currently building{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              PlutoFi
            </Link>
            . I also do some research regarding{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              DEX privacy protocols
            </Link>
            {" "}and{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              semantic data engineering
            </Link>
            . On the side, I help with engineering at{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              BaSD
            </Link>
            .
          </p>

          <p> </p>

          <p className="pt-2 font-medium">Recent work:</p>

          <ul className="space-y-2 ml-2">
            <li className="flex gap-3">
              <span className="text-neutral-400 select-none">→</span>
              <span>
                worked on{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  project name
                </Link>
                {" "}and a{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  another project
                </Link>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-neutral-400 select-none">→</span>
              <span>
                built stuff to make it easier to{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  do something
                </Link>
                {" "}and{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  deploy
                </Link>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 select-none">→</span>
              <span>scaled and sold a startup simplifying [something] for [audience]</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 select-none">→</span>
              <span>
                Did [role] + [role] at{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  Company
                </Link>
                , a [description]
              </span>
            </li>
          </ul>
        </article>

        {/* Technical Section */}
        <section className="mt-2 mb-16 text-sm">
          <h2 className="text-sm font-medium mb-6 uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Projects
          </h2>
          <div className="space-y-6">
            <Link href="/projects/placeholder-project-1" className="block group">
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">Project One</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">Oct 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  description of your project
                </p>
              </div>
            </Link>
            <Link href="/projects/placeholder-project-2" className="block group">
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">Project Two</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">Sep 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  another project description
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Essays Section */}
        <section className="mt-20 mb-16">
          <h2 className="text-sm font-medium mb-6 uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Writing
          </h2>
          <div className="space-y-4">
            <Link href="/writing/placeholder-post-1" className="block group">
              <div className="flex justify-between items-baseline py-2 border-b border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <h3 className="font-normal">placeholder post title 1</h3>
                <span className="text-xs text-neutral-500 dark:text-neutral-600">Sep 2025</span>
              </div>
            </Link>
            <Link href="/writing/placeholder-post-2" className="block group">
              <div className="flex justify-between items-baseline py-2 border-b border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <h3 className="font-normal">placeholder post title 2</h3>
                <span className="text-xs text-neutral-500 dark:text-neutral-600">Aug 2025</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
