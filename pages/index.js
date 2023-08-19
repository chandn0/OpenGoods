import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import projectsData from "../data/projects.json";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "../components/theme";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import PublicGoodsList from "../components/PublicGoodsList";
import data from "../data/grants.json";
import Articles from "../components/articles";
import articles from "../data/articles.json";
import VideoList from "../components/VideoList";
import videos from "../data/videos.json";
import { Button } from "@nextui-org/react";
import React from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Head>
          <title>OpenGoods</title>
          <link rel="icon" href="/PG-parachute+copy.png" />
        </Head>
        {/* <Navbar /> */}
        <br />
        <div className={styles.btngroup}>
          <a href="#articles"> Articles </a>
          <a href="#video"> Videos </a>
          <a href="#grants">Grants </a>
          <a href="#projects"> Projects </a>
        </div>
        <div className={styles.content}>
          <p>
            Digital Public Goods Libary
            <br />
            <br />
            Here, you'll find a handpicked selection of Projects 🛠️, Informative
            Articles 📚, Valuable Grants 💰, and Engaging Videos 📽️. <br />
            <br />
            To Get a head start in the world of Public Goods with our carefully
            curated resources! 🚀
          </p>
        </div>

        <div id="projects">
          <h2>Public Goods Projects To Contribute</h2>
          {projectsData.map((project, index) => (
            <Card cardData={project} key={index} />
          ))}
        </div>
        <div id="grants">
          <PublicGoodsList data={data} />
        </div>
        <div id="articles">
          <Articles data={articles} />
        </div>
        <div id="video">
          <VideoList videos={videos} />
        </div>

        <footer className={styles.footer}>
          {/* <hr /> */}
          <a
            href="https://twitter.com/chandan1_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Chandan
          </a>

          <a href="https://github.com/chandn0/OpenGoods" target="_blank">
            Git Repo
          </a>
        </footer>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}
