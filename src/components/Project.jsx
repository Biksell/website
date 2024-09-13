import Button from "./Button"

const Project = ({imgPath, text, repoLink}) => {
  return (
    <div className={`project`}>
      <img src={imgPath}></img>
      <span>{text}</span>
      <Button text="GitHub" link={repoLink}/>
    </div>
  )
}

export default Project
