const formAnadir =
    `<form class="formulario" id="formulario-anadir">
            <h2>Añadir contacto</h2>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre">
                <p class="error-nombre"></p>
            </div>
            <div>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos" required>
                <p class="error-apellidos"></p>
            </div>
            <div>
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" required>
                <p class="error-direccion"></p>
            </div>
            <div>
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" required>
                <p class="error-telefono"></p>
            </div>
            <button type="submit" name="anadir">Añadir</button>
        </form>`;

const formEditar =
    `<form class="formulario" id="formulario-editar">
            <h2>Editar contacto</h2>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre">
                <p class="error-nombre"></p>
            </div>
            <div>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos" required>
                <p class="error-apellidos"></p>
            </div>
            <div>
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" required>
                <p class="error-direccion"></p>
            </div>
            <div>
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" required>
                <p class="error-telefono"></p>
            </div>
            <button type="submit" name="editar">Editar</button>
        </form>`;

const formBuscar =
    `<form class="formulario" id="formulario-buscar">
            <h2>Buscar contacto</h2>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre">
                <p class="error-nombre"></p>
            </div>
            <div>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos" >
                <p class="error-apellidos"></p>
            </div>
            <div>
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" >
                <p class="error-direccion"></p>
            </div>
            <div>
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" >
                <p class="error-telefono"></p>
            </div>
            <button type="submit" name="buscar">Buscar</button>
        </form>`;


export { formAnadir, formEditar, formBuscar };