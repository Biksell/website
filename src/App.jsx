import {useState, useEffect} from 'react'
import Project from './components/Project';
import Button from './components/Button';

function App() {
  const [cursor, setCursor] = useState('_');

  useEffect (() => {
    setTimeout(() => {
      setCursor(cursor === " " ? "_" : " ")
    }, 700)
  })

  return (
    <main className={`container-fluid p-0 `}>
      <section className={`container-fluid-section-1 header text-center`}>
        <div>
          <span>biksel.dev</span>
          <span className="cursor">{cursor}</span>
        </div>
        <div className={`d-grid gap-2 d-sm-flex justify-content-sm-center`}>
          <Button text="GitHub" link="https://github.com/biksell" icon="bi-github"/>
        </div>
      </section>
      <div className={`line`}/>
      <section id="portfolio" className={`container-fluid-section-2`}>
        <div className={`row`}>
          <div className={`col text-center`}>
            <h1>Projects</h1>
          </div>
          <div className={`portfolio`}>
            <Project
              header="Run-queue client"
              text="Web-client for checking pending runs of games, series, moderators and users from speedrun.com. Utilizes V2 of the speedrun.com API, which is slower but more consistent than V1. Support for V1 is in development."
              imgPath="/assets/run-queue.png"
              repoLink="https://github.com/biksell/run-queue"
            />
            <Project
              header="Refresh rate switch"
              text="Quickly change your refresh rate on any monitor from the taskbar. Started from my own needs in speedrunning, but I quickly noticed other people had use for it as well."
              imgPath="https://raw.githubusercontent.com/Biksell/refreshrate/main/screenshot.png"
              repoLink="https://github.com/biksell/refreshrate"
            />
            <Project
              header="Image Notes"
              text="Slideshow program made with Python for Windows. Useful for speedrunning generic puzzle games and having their solutions opened at the same time. LiveSplit integration and hotkey changing planned to be implemented in the future."
              imgPath="/assets/image-notes.png"
              repoLink="https://github.com/biksell/image-notes"
            />
            <Project
              header="Discord Bots"
              text="Discord bots made with both discord.py and discord.js. Features include automatic video download from Instagram Reels and TikTok links, and embedding them back into Discord. PeeBee-bot is a speedrunning personal best tracker, that is still in development."
              imgPath="/assets/discord.png"
              repoLink="https://github.com/biksell/lux"
            />
            <Project
              header="Autosplitters"
              text="Dozens of autosplitting scripts made for LiveSplit, a timer program for speedrunning. Made using the ASL (Auto Splitting Language), which is a small scripting language made specifically for this purpose."
              imgPath="/assets/livesplit.png"
              repoLink="https://github.com/biksell/asl"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
