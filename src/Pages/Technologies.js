import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    nodejs,
    express,
    react,
    redux,
    mongo,
    nextjs,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    python,
    scrapy,
    pandas,
    numpy,
    scikitlearn,
    jupyter,
    colab,
    azure,
    vercel,
    ps,
    ai,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={nodejs} title="NodeJS" alt="" />
        <img src={express} title="ExpressJS" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={mongo} title="MongoDB" alt="" />
        <img src={nextjs} title="NextJS" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={scrapy} title="Scrapy" alt="" />
        <img src={pandas} title="Pandas" alt="" />
        <img src={numpy} title="NumPy" alt="" />
        <img src={scikitlearn} title="Scikit-Learn" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={jupyter} title="Jupyter Notebook" alt="Jupyter Notebook" />
        <img src={colab} title="Google Colab" alt="Google Colab" />
        <img src={azure} title="Azure" alt="Azure" />
        <img src={vercel} title="Vercel" alt="Vercel" />
        <img src={ps} title="Adobe Photoshop" alt="Adobe Photoshop" />
        <img src={ai} title="Adobe Illustrator" alt="Adobe Illustrator" />
      </section>
    </main>
  );
}

export default Technologies;
