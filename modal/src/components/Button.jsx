import './Button.css'

function Button({ setIsOpened }) {

  return (
    <>
      <button onClick={() => setIsOpened(true)} className="button-modal">Открыть модалку</button>
    </>
  )
}

export default Button
