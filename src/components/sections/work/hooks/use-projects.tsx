export type ProjectProps = { id: string };
export function useProjects() {
  const data: ProjectProps[] = [{ id: '1' }, { id: '2' }, { id: '3' }];
  return { data };
}
