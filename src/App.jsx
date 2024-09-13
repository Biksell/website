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
          <Button text="GitHub" link="https://github.com/biksell"/>
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
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, ante eget tincidunt pharetra, leo purus fermentum sapien, sit amet finibus neque metus in est. Sed vel nisi in ipsum finibus pellentesque in nec dui. Duis nibh augue, vulputate eu nisl ut, vulputate maximus elit. Sed nulla mauris, sagittis eu bibendum non, placerat vel dui. Curabitur pharetra tempor turpis id lobortis. Aenean eget enim id nunc sodales fermentum viverra id neque. Aenean leo ipsum, mollis molestie leo in, congue volutpat tellus. Pellentesque at nisl blandit, lobortis nisi eget, vestibulum urna. Nunc fringilla felis vitae purus faucibus, vel elementum sapien hendrerit"
              imgPath="/assets/placeholder.png"
              repoLink="https://github.com/biksell"
            />
            <Project
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, ante eget tincidunt pharetra, leo purus fermentum sapien, sit amet finibus neque metus in est. Sed vel nisi in ipsum finibus pellentesque in nec dui. Duis nibh augue, vulputate eu nisl ut, vulputate maximus elit. Sed nulla mauris, sagittis eu bibendum non, placerat vel dui. Curabitur pharetra tempor turpis id lobortis. Aenean eget enim id nunc sodales fermentum viverra id neque. Aenean leo ipsum, mollis molestie leo in, congue volutpat tellus. Pellentesque at nisl blandit, lobortis nisi eget, vestibulum urna. Nunc fringilla felis vitae purus faucibus, vel elementum sapien hendrerit"
              imgPath="/assets/placeholder.png"
              repoLink="https://github.com/biksell"
            />
            <Project
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, ante eget tincidunt pharetra, leo purus fermentum sapien, sit amet finibus neque metus in est. Sed vel nisi in ipsum finibus pellentesque in nec dui. Duis nibh augue, vulputate eu nisl ut, vulputate maximus elit. Sed nulla mauris, sagittis eu bibendum non, placerat vel dui. Curabitur pharetra tempor turpis id lobortis. Aenean eget enim id nunc sodales fermentum viverra id neque. Aenean leo ipsum, mollis molestie leo in, congue volutpat tellus. Pellentesque at nisl blandit, lobortis nisi eget, vestibulum urna. Nunc fringilla felis vitae purus faucibus, vel elementum sapien hendrerit"
              imgPath="/assets/placeholder.png"
              repoLink="https://github.com/biksell"
            />
            <Project
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, ante eget tincidunt pharetra, leo purus fermentum sapien, sit amet finibus neque metus in est. Sed vel nisi in ipsum finibus pellentesque in nec dui. Duis nibh augue, vulputate eu nisl ut, vulputate maximus elit. Sed nulla mauris, sagittis eu bibendum non, placerat vel dui. Curabitur pharetra tempor turpis id lobortis. Aenean eget enim id nunc sodales fermentum viverra id neque. Aenean leo ipsum, mollis molestie leo in, congue volutpat tellus. Pellentesque at nisl blandit, lobortis nisi eget, vestibulum urna. Nunc fringilla felis vitae purus faucibus, vel elementum sapien hendrerit"
              imgPath="/assets/placeholder.png"
              repoLink="https://github.com/biksell"
            />
            <Project
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, ante eget tincidunt pharetra, leo purus fermentum sapien, sit amet finibus neque metus in est. Sed vel nisi in ipsum finibus pellentesque in nec dui. Duis nibh augue, vulputate eu nisl ut, vulputate maximus elit. Sed nulla mauris, sagittis eu bibendum non, placerat vel dui. Curabitur pharetra tempor turpis id lobortis. Aenean eget enim id nunc sodales fermentum viverra id neque. Aenean leo ipsum, mollis molestie leo in, congue volutpat tellus. Pellentesque at nisl blandit, lobortis nisi eget, vestibulum urna. Nunc fringilla felis vitae purus faucibus, vel elementum sapien hendrerit"
              imgPath="/assets/placeholder.png"
              repoLink="https://github.com/biksell"
            />
            <Project
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor, ante eget tincidunt pharetra, leo purus fermentum sapien, sit amet finibus neque metus in est. Sed vel nisi in ipsum finibus pellentesque in nec dui. Duis nibh augue, vulputate eu nisl ut, vulputate maximus elit. Sed nulla mauris, sagittis eu bibendum non, placerat vel dui. Curabitur pharetra tempor turpis id lobortis. Aenean eget enim id nunc sodales fermentum viverra id neque. Aenean leo ipsum, mollis molestie leo in, congue volutpat tellus. Pellentesque at nisl blandit, lobortis nisi eget, vestibulum urna. Nunc fringilla felis vitae purus faucibus, vel elementum sapien hendrerit"
              imgPath="/assets/placeholder.png"
              repoLink="https://github.com/biksell"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
