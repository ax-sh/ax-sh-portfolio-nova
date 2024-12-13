import clsx from 'clsx';

export default function WorkSection() {
  return (
    <section
      className={clsx(
        'contact-section',
        'grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen ',
        'p-8 pb-20 gap-16 sm:p-20 ',
        'font-[family-name:var(--font-geist-sans)]'
      )}
    >
      work
    </section>
  );
}
