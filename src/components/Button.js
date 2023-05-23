const Button = (proms) => {

  return <button onClick={proms.onAdd} style={{backgroundColor: proms.color}} className="btn">{proms.text}</button>
}

export default Button
