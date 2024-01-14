import { BibtexParser } from "bibtex-js-parser";
import { server } from "config";
import { allArticles } from "contentlayer/generated";
import fs, { promises as ps } from "fs";
import Articles from "./Articles";
import Experiences from "./Experiences";

// get experiences from the local file
async function getExperiences(): Promise<any> {
  if (fs.existsSync("public/content/experiences.json")) {
    const res = await ps.readFile("public/content/experiences.json", "utf-8");
    const experiences: Experience[] = JSON.parse(res);
    return experiences;
  }

  const experiences = fetch(`${server}/content/experiences.json`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return experiences;
}

// get sorted articles from the contentlayer
async function getSortedArticles(): Promise<any> {
  let articles = await allArticles;
  articles = articles.filter((article: any) => article.status === "published");
  return articles.sort((a: any, b: any) => {
    if (a.publishedAt && b.publishedAt) {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }
    return 0;
  });
}

export default async function Server({
  component,
}: {
  component: string;
}): Promise<JSX.Element> {
  switch (component) {
    case "Educations":
      return <Educations educations={await getEducations()} />;
    case "Experiences":
      return <Experiences experiences={await getExperiences()} />;
    case "Publications":
      return <Publications publications={await getPublications()} />;
    case "Articles":
      return <Articles articles={await getSortedArticles()} />;
    default:
      return <></>;
  }
}
