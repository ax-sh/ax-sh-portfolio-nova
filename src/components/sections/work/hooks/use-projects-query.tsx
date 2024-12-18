import { faker } from '@faker-js/faker/locale/ar';

export type ProjectProps = { id: string; url: string; color: string; image: string; name: string };
function fetchProjects() {
  function gen() {
    return {
      id: faker.internet.email(),
      url: faker.internet.url(),
      color: faker.internet.color(),
      image: faker.image.url({ width: 500, height: 500 }),
      name: faker.internet.displayName({ firstName: 'Jon', lastName: 'Doe' }),
    };
  }
  const data: ProjectProps[] = faker.helpers.multiple(gen, { count: 9 });
  return data;
}

export function useProjectsQuery() {
  // TODO make use of react query later for fetching
  const data = fetchProjects();
  return { data };
}
