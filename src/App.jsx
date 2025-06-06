function App() {
  return (
    <div>
      <h1>Formulario de Registro</h1>

      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" />
        </div>

        <div>
          <label>Apellido:</label>
          <input type="text" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" />
        </div>

        <div>
          <label>Teléfono:</label>
          <input type="tel" />
        </div>

        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>

        <div>
          <label>Confirmar contraseña:</label>
          <input type="password" />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default App;