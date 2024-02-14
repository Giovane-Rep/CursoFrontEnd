const Container = ({children}) => {
  return (
    <div>
        <h1>Conteúdo do component pai</h1>
        {children}
    </div>
  )
}

export default Container;