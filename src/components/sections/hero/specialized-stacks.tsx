import {
  AmazonwebservicesOriginalWordmark,
  AnacondaOriginal,
  AndroidstudioOriginal,
  BlenderOriginal,
  BunOriginal,
  CodecovPlain,
  Css3OriginalWordmark,
  Css3PlainWordmark,
  D3jsOriginal,
  DartOriginalWordmark,
  DockerOriginal,
  DockerOriginalWordmark,
  FigmaOriginal,
  FlutterOriginal,
  GraphqlPlain,
  NextjsOriginalWordmark,
  NextjsPlain,
  ReactOriginalWordmark,
  StorybookOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VitestOriginal,
} from 'devicons-react';

export function SpecializedStacks() {
  return (
    <span className={'flex flex-wrap gap-2 [&>svg]:!h-10 [&>svg]:!w-10 '}>
      <TypescriptOriginal />
      <ReactOriginalWordmark />
      <TailwindcssOriginal />
      <AnacondaOriginal />
      <VitestOriginal />
      <StorybookOriginal />
      <GraphqlPlain />
      <AmazonwebservicesOriginalWordmark />
      <AndroidstudioOriginal />
      <BlenderOriginal />
      <BunOriginal />
      <CodecovPlain />
      <Css3OriginalWordmark />
      <Css3PlainWordmark />
      <D3jsOriginal />
      <DartOriginalWordmark />
      <DockerOriginal />
      <DockerOriginalWordmark />
      <FigmaOriginal />
      <FlutterOriginal />

      <span className={'p-3 rounded bg-white [&>svg]:!h-10 [&>svg]:!w-10 flex gap-2'}>
        <NextjsOriginalWordmark />
        <NextjsPlain />
      </span>
    </span>
  );
}
