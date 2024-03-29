import AboutPlaceholder from "components/skeleton/AboutPlaceholder";
import ArticlesPlaceholder from "components/skeleton/ArticlesPlaceholder";
import ExperiencesPlaceholder from "components/skeleton/ExperiencesPlaceholder";
import LifeEventsPlaceholder from "components/skeleton/LifeEventsPlaceholder";
import fs from "fs";
import { Suspense } from "react";
import generateRss from "utils/generate-rss";
import About from "./About";
import Server from "./Server";
import Miscellaneous from "./Miscellaneous";

export default async function Home(): Promise<JSX.Element> {
  if (fs.existsSync("public")) {
    await generateRss();
  }

  return (
    <>
      <Suspense fallback={<AboutPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <About />
      </Suspense>

      {/* <Photos images={photos} /> */}

      <Suspense fallback={<ExperiencesPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <Server component="Experiences" />
      </Suspense>

      <Miscellaneous />

      <Suspense fallback={<ArticlesPlaceholder />}>
        {/* @ts-expect-error Server Component */}
        <Server component="Articles" />
      </Suspense>

      {/* <Calendar /> */}
    </>
  );
}
