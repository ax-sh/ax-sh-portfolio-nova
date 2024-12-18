import { type ProjectProps, useProjects } from '@/components/sections/work/hooks/use-projects';
import clsx from 'clsx';

function ProjectCard({ id, color }: ProjectProps) {
  return (
    <article className={'h-60'} style={{ backgroundColor: color }}>
      <span>{id}</span>
    </article>
  );
}
export function ProjectSection() {
  const { data: projects } = useProjects();
  return (
    <div className={clsx('grid grid-cols-3 gap-2 w-full py-3')}>
      {projects.map((i) => (
        <a key={i.id} href={i.url} target={'_blank'} rel={'noreferrer'}>
          <ProjectCard {...i} />
        </a>
      ))}
    </div>
  );
}
