import { projects } from '../../utils/projectsData';
import Head from 'next/head'
import Link from 'next/link'

const Board = ({ project }) => {
  return (
    <div className="container">
      <Head>
        <title>CI Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {project.name} CI
        </h1>

        <p className="description">
          <Link href="/">
            <a>Back to Overview</a>
          </Link>
        </p>

        <div className='left'>
          <div><a href='https://github.com/staticwebdev/nextjs-starter/actions'><img src="/passing.svg" alt="badge" className="logo" /></a>
            chore: update test - 3 minutes ago
            <p className='subtitle'>
              Playwright tests #24: Pull request #32 opened by fhinkel: 2m 5s
            </p>
          </div>

          <div><a href='https://github.com/staticwebdev/nextjs-starter/actions'><img src="/failing.svg" alt="badge" className="logo" /></a>
            Playwright tests - 12 hours ago
            <p className='subtitle'>
              Playwright tests #23: Scheduled: 1m 43s
            </p>
          </div>

          <div><a href='https://github.com/staticwebdev/nextjs-starter/actions'><img src="/passing.svg" alt="badge" className="logo" /></a>
            chore: add missing lint configs (#30) - yesterday
            <p className='subtitle'>
              Lint #9: Commit 53e7fbb pushed by fhinkel: 33s
            </p>
          </div>

          <div><a href='https://github.com/staticwebdev/nextjs-starter/actions'><img src="/passing.svg" alt="badge" className="logo" /></a>
            Playwright tests - 2 days ago
            <p className='subtitle'>
              Playwright tests #15: Scheduled: 1m 54s
            </p>
          </div>

          <div><a href='https://github.com/staticwebdev/nextjs-starter/actions'><img src="/passing.svg" alt="badge" className="logo" /></a>
            chore: update next to 12 (#27) - 2 days ago
            <p className='subtitle'>
              Playwright tests #10: Commit 0b1e99a pushed by fhinkel: Scheduled:  1m 36s
            </p>
          </div>

        </div>


      </main>

      <footer>

      </footer>

      <style jsx>{`
        .left {
            justify-content: left;
            align-items: left;
        }
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

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
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .subtitle {
            line-height: .7;
            font-size: .7rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1600px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 90%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
  )
}


export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((proj) => proj.id === params.id);
  console.log(params.id);
  return { props: { project } };
}

export default Board