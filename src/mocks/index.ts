export async function initMocks() {
  if (typeof window === 'undefined') {
    // const { server } = await import('./server')
    // await server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
}

// Note the change in ENV var name here
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
// initMocks().then(() => console.log('mocks enabled'));
// }
