const Button = ({text, link}) => {
  return (
    <div>
      <a className={`btn btn-outline-light px-3`} href={link}>
        <i className={`bi-github`}> </i>
        {text}
      </a>
    </div>
  )
}

export default Button
