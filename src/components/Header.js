
const Header = ({onAdd, ll}) => {
  return (
    <header className="header">
      <h1>fallow america</h1>
      <button onClick={onAdd} style={{backgroundColor: ll ? "red" : 'green'}} className="btn">{ll ? "close" : 'add'}</button>
    </header>
  )
}

export default Header
