import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-black h-svh">
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center lg:px-8">
          <div className="max-w-4xl">
            <div className="flex justify-start mb-8">
              <img 
                src="/lovable-uploads/f6615c53-e1f9-45e6-928c-136887dfd867.png" 
                alt="GoatPath Logo" 
                className="w-[120px] h-[120px]"
              />
            </div>
            <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white text-left sm:text-6xl">
              Shaping the future of products, one idea at a time.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-left text-slate-50">
              I help product and innovation teams validate business ideas through structured experiments and the support of artificial intelligence.
              My work reduces uncertainty, delivers evidence, and accelerates smarter decision-making.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a href="#" className="rounded-full border-2 border-white bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors duration-300">
                Let's collaborate together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Projects Section */}
      <section className="bg-black h-svh">
        <div className="mx-auto max-w-7xl px-6 h-full flex flex-col justify-center lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              What We made Happen
            </h2>
            <p className="mt-2 text-lg/8 text-white">Projects I've co-designed with teams and founders to turn ideas into meaningful, testable solutions.</p>
          </div>
          <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                id: 1,
                title: 'Title proyect',
                slug: 'project-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
              },
              {
                id: 2,
                title: 'Title proyect',
                slug: 'project-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
              },
              {
                id: 3,
                title: 'Title proyect',
                slug: 'project-3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
              },
            ].map((project) => (
              <article
                key={project.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white border-2 border-white px-8 pb-8 pt-48"
              >
                <h3 className="mt-3 text-lg/6 font-semibold text-black">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;