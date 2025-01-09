import { SvgIconWrapper } from '@/components/sections/hero/svg-icon-wrapper';
import clsx from 'clsx';
import {
  NextjsOriginal,
  PlaywrightOriginal,
  ReactOriginal,
  StorybookOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VitestOriginal,
} from 'devicons-react';

export function SpecializedStacks() {
  return (
    <article>
      <h2>I Specialize in</h2>
      <span
        className={clsx(
          'flex flex-wrap gap-2 pb-3'
          // '[&>svg]:!h-10 [&>svg]:!w-10'
        )}
      >
        {/*Base*/}
        {/*<Html5OriginalWordmark />*/}
        {/*<TypescriptOriginal />*/}
        {/*<JavascriptOriginal />*/}
        {/*<Css3OriginalWordmark />*/}
        {/*<Css3PlainWordmark />*/}
        {/*<NodejsOriginalWordmark />*/}
        <SvgIconWrapper size={32}>
          <TypescriptOriginal name={'Typescript'} />
          <NextjsOriginal name={'Next.js'} />
          <ReactOriginal name={'React.js'} />
          <TailwindcssOriginal name={'Tailwind.css'} />
          <VitestOriginal name='Vitest(Jest)' />
          <PlaywrightOriginal name={'Playwright(e2e)'} />
          <StorybookOriginal name={'Storybook(Design System)'} />
        </SvgIconWrapper>

        {/*<ReactOriginalWordmark />*/}

        {/*<SassOriginal />*/}

        {/*<ReduxOriginal />*/}
        {/*<ReactrouterOriginal />*/}
        {/* Testing */}

        {/*<PuppeteerOriginal />*/}

        {/*<DockerOriginal />*/}
        {/*<DockerOriginalWordmark />*/}
        {/*<AmazonwebservicesOriginalWordmark />*/}
        {/*<div className={'w-full'}></div>*/}
        {/*/!* Database*!/*/}
        {/*<PostgresqlOriginal />*/}
        {/*<PrismaOriginal />*/}
        {/*<ThreejsOriginalWordmark />*/}
        {/*<SupabaseOriginalWordmark />*/}
        {/*/!*Content management*!/*/}
        {/*<SanityOriginal />*/}
        {/*<SlackOriginal />*/}
        {/*<GraphqlPlain />*/}
        {/*<SqlalchemyPlainWordmark />*/}
        {/*<SqliteOriginalWordmark />*/}
        {/*<StreamlitOriginalWordmark />*/}
        {/*<JiraOriginalWordmark />*/}
        {/*<JqueryOriginalWordmark />*/}
        {/*<span className={'p-3 rounded-md bg-white [&>svg]:!h-10 [&>svg]:!w-10 flex gap-2'}>*/}
        {/*  <NextjsOriginalWordmark />*/}
        {/*  <NextjsPlain />*/}
        {/*  <RustOriginal />*/}
        {/*</span>*/}
        {/*/!* Un perfected *!/*/}
        {/*<AnacondaOriginal />*/}
        {/*<PandasOriginalWordmark />*/}
        {/*<P5jsOriginal />*/}
        {/*<NetlifyOriginalWordmark />*/}
        {/*<NestjsOriginal />*/}
        {/*<JupyterOriginalWordmark />*/}
        {/*<InsomniaOriginal />*/}
        {/*<AndroidstudioOriginal />*/}
        {/*<BlenderOriginal />*/}
        {/*<BunOriginal />*/}
        {/*<CodecovPlain />*/}
        {/*<D3jsOriginal />*/}
        {/*<DartOriginalWordmark />*/}
        {/*<FigmaOriginal />*/}
        {/*<FlutterOriginal />*/}
        {/*<GitOriginalWordmark />*/}
        {/*<GithubOriginal />*/}
        {/*<GithubOriginalWordmark />*/}
        {/*<GithubactionsOriginal />*/}
      </span>
    </article>
  );
}
