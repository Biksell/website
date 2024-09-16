const Button = ({text, link, icon}) => {
  return (
    <div className={`btnDiv`}>
      <a className={`btn btn-outline-light px-3`} href={link}>
        <i className={icon}> </i>
        {text}
      </a>
    </div>
  )
}

export default Button
