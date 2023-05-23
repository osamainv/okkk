const Few = (proms) => {
  return (
    <div className="form-control">
        <label>{proms.labelName}</label>
        <input type={proms.type} placeholder={proms.placeholder} />
    </div>
  )
}

export default Few
