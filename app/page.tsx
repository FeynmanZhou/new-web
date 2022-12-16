import AboutPlaceholder from "components/skeleton/AboutPlaceholder";
import EducationsPlaceholder from "components/skeleton/EducationsPlaceholder";
import ExperiencesPlaceholder from "components/skeleton/ExperiencesPlaceholder";
import LifeEventsPlaceholder from "components/skeleton/LifeEventsPlaceholder";
import PublicationsPlaceholder from "components/skeleton/PublicationsPlaceholder";
import { Suspense } from "react";
import About from "./About";
import Server from "./Server";

export default async function Home(): Promise<JSX.Element> {
  return (
    <>
      <Suspense fallback={<AboutPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <About />
      </Suspense>

      {/* <Photos images={photos} /> */}

      <Suspense fallback={<EducationsPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <Server component="Educations" />
      </Suspense>

      <Suspense fallback={<ExperiencesPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <Server component="Experiences" />
      </Suspense>

      <Suspense fallback={<PublicationsPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <Server component="Publications" />
      </Suspense>

      {/* <Suspense fallback={<ArticlesPlaceholder />}> */}
      {/* <Server component="Articles" />
      </Suspense> */}

      <Suspense fallback={<LifeEventsPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <Server component="LifeEvents" />
      </Suspense>
    </>
  );
}
