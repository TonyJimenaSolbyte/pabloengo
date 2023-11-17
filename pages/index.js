import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { Contact } from "../components/Contact";
import { Bio } from "../components/Bio";
import { MainLogos } from "../components/MainLogos";
import { Showreel } from "../components/Showreel";

export default function Home() {
  return (
    <>
      <Head>
        <title>PabloEngo - DOP</title>
        <meta name="description" content="DOP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <section className="section">
          <Contact />
          <div className="links stills">
            <Link href="/stills">
              <h3>Stills</h3>
            </Link>
          </div>
          <MainLogos />
          <Bio />
          <Showreel />
        </section>

        <section className="section">
          <div className="video-container">
            <div className="video-description">Texto</div>
            <div className="video">
              <video controls>
                <source src="/videos/Goicoechea-VOGUE.mp4" />
              </video>
            </div>
            <div className="video-description">Texto</div>
          </div>
        </section>
      </Main>
    </>
  );
}

const Main = styled.main`
  .video-container {
    align-items: center;

    display: grid;
    grid-template-columns: 2fr 5fr 2fr;
  }

  .video-description {
    width: auto;
  }
  .video {
  }
  video {
    width: auto;
    max-width: 900px;
  }
`;
