import Button from "./Button"

const Project = ({header, imgPath, text, repoLink}) => {
  let buttons = (
    <>
      <Button text="GitHub" link={repoLink} icon="bi-github"/>
    </>
  )

  if (header === "Run-queue client") {
    buttons = (
      <div className={`btn-row`}>
        <Button text="Website" link="https://run-queue.biksel.dev" icon="none"/>
        <Button text="GitHub" link={repoLink} icon="bi-github"/>
      </div>
    )
  }

  return (
    <div className={`project`}>
      <img src={imgPath}></img>
      <h3>{header}</h3>
      <span>{text}</span>
      {buttons}
    </div>
  )
}

export default Project
