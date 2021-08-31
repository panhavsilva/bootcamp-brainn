function Button({ kind, children }) {
  const className = kind === "primary" ? "primary" : "secondary";
  return (
    <button 
      className={className} 
      onClick={() => console.log(`clicked ${kind} button!`)}
    >
      {children}
    </button>
  )
}

export default Button