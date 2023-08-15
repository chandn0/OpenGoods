import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import projectsData from "../data/projects.json";
import { ThemeProvider } from "next-themes";
import ThemeChanger from "../components/theme";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div>
          <h1>List of Digital Public Goods Projects You Can Contribute To</h1>
          {projectsData.map((project, index) => (
            <Card cardData={project} key={index} />
          ))}
        </div>
        <footer>
          <a
            href="https://twitter.com/chandan1_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Chandan
          </a>
        </footer>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 50px;
            border-top: 1px solid #eaeaea;
            display: flex;
            // justify-content: center;
            // align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            // color: inherit;
            margin-left: 0.5rem;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

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
