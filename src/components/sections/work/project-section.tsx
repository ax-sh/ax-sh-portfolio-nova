import {
  type ProjectProps,
  useProjectsQuery,
} from '@/components/sections/work/hooks/use-projects-query';
import clsx from 'clsx';

function ProjectCard({ color, image, name, ...rest }: ProjectProps) {
  console.log('ProjectCard', rest);
  return (
    <article
      className={
        'h-52 overflow-hidden grid grid-rows-1 grid-cols-1 relative rounded hover:opacity-80'
      }
      style={{ backgroundColor: color }}
    >
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={image}
        alt={image}
        className={'row-start-1 col-start-1 object-cover object-center'}
      />
      <div
        className={clsx(
          'relative row-start-1 col-start-1',
          'p-3',
          'bg-gradient-to-t from-black/80 to-transparent',
          'grid items-end',
          'prose prose-h6:text-secondary prose-h6:text-xl max-w-prose'
        )}
      >
        <h6>{name}</h6>
      </div>
    </article>
  );
}

export function ProjectSection() {
  const { data: projects, isLoading } = useProjectsQuery();
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div
      className={clsx('grid ', 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', ' gap-3 w-full py-3')}
    >
      {projects.map((project) => (
        <a key={project.id} href={project.url} target={'_blank'} rel={'noreferrer'}>
          <ProjectCard {...project} />
        </a>
      ))}
    </div>
  );
}
