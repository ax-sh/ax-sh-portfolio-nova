import { type ProjectProps, useProjects } from '@/components/sections/work/hooks/use-projects';
import clsx from 'clsx';

function ProjectCard({ id }: ProjectProps) {
  return <article className={'bg-green-500 '}>{id}</article>;
}
export function ProjectSection() {
  const { data: projects } = useProjects();
  return (
    <div className={clsx('grid grid-cols-3 gap-2')}>
      {projects.map((i) => (
        <ProjectCard key={i.id} {...i} />
      ))}
    </div>
  );
}
