function Button({ kind, children }) {
  const className = kind === "primary" ? "primary" : "secondary";
  return (
    <button className={className} >
      {children}
    </button>
  )
}

export default Button