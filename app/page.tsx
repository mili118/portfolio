import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16 flex flex-col">
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
            <Link href="https://github.com/mili118" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              github
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <Link href="https://www.linkedin.com/in/michael-liang8/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">
              linkedin
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <article className="space-y-6 leading-loose text-sm">
          <p>
            Greetings! I&apos;m Michael and I study Computer Engineering at UC San Diego. I enjoy building applications on decentralized systems.
          </p>

          {/* <p>
             I&apos;m currently building{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              PlutoFi
            </Link>
            . I also do some research regarding{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              privacy protocols in DEXes
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
          </p> */}

          <p className="pt-1 font-medium mb-1">I'm currently working on:</p>

          <ul className="space-y-1">
            <li className="flex gap-3">
              <span className="text-neutral-400 select-none">→</span>
              <span>
                 {" "}building{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  PlutoFi
                </Link>
                , a liquidity pool aggregation protocol on Solana
                
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 select-none">→</span>
              <span>
                researching{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  privacy protocols on DEXes
                </Link>
                {" "}and{" "}
                <Link href="#" className="underline underline-offset-4 decoration-1">
                  semantic data engineering
                </Link>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 select-none">→</span>
              <span>
               helping lead engineering at{" "}
            <Link href="#" className="underline underline-offset-4 decoration-1">
              BaSD
            </Link>
              </span>
            </li>
          </ul>

          <p className="pt-2"> In my free time, I enjoy{" "}

          <Link href="#" className="underline underline-offset-4 decoration-1">
            writing blogs
          </Link>
            {" "} about the things I read and learn about. I also enjoy hitting a little white 
            ball around a field sometimes. ⛳️

          
          </p>

        </article>

        {/* Technical Section */}
        <section className="mt-10 text-sm">
          <h2 className="text-sm font-medium mb-6 uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Projects
          </h2>
          <div className="space-y-6">
            <Link href="/projects/placeholder-project-1" className="block group">
              
              {/* project 1 */}
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">Raft Server</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">Oct 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  fault tolerant key-value storage server on a distributed network
                </p>
              </div>
            </Link>

            {/* project 2 */}
            <Link href="/projects/placeholder-project-2" className="block group">
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">Flight Agent</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">Oct 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  search engine and graph for flights and accomodation
                </p>
              </div>
            </Link>

            {/* project 3 */}
            <Link href="/projects/placeholder-project-2" className="block group">
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">Bonk.Capital</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">Aug 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  stablecoin lending protocol on Solana
                </p>
              </div>
            </Link>

            {/* project 4 */}
            <Link href="/projects/placeholder-project-2" className="block group">
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">Loki</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">May 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  monitoring decentalized exchange analytics
                </p>
              </div>
            </Link>

            {/* project 5 */}
            <Link href="/projects/placeholder-project-2" className="block group">
              <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-2 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">EMG Prosthetic Hand</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-600">Jan 2025</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  classifying EMG signals to identify finger motion
                </p>
              </div>
            </Link>

          </div>
        </section>

        {/* Essays Section
        <section className="mt-10">
          <h2 className="text-sm font-medium mb-4 uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
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
        </section> */}
      </div>
    </div>
  )
}
