## Redux Toolkit paso a paso

1. Crear estructura de archivos:

   - /redux
   - - /features
   - - /services
   - - hooks.ts
   - - provider.tsx
   - - store.ts

2. Crear el archivo _counterSlice.ts_ que será una parte de nuestro estado global redux.

   - En este creamos el counter con la función **createSlice** de redux.
   - Dentro de este vamos a darle un _name_, un _estado inicial_ y los _reducers_ que son las funciones asociadas a este slice(porción de estado).
   - Exportamos las _acciones_, que son ni más ni menos que los _reducers_.
   - Exportamos el _value_ para utilizarlo en los componentes.

3. En el archivo _store.ts_ importamos nuestro slice y creamos el **store**.

4. Crear el **provider**.
5. Envolver la parte de nuestra app que va a tener acceso al store. En este caso toda la app.
   Lo hacemos en _src/app/layout.tsx_.

_NOTA: Los puntos 1.,2.,3., etc. no siguen el orden de este archivo, es el mismo orden pero numerado diferente._

6. En este caso usaremos hooks que estarán en _hooks.ts_.
   Creamos **useAppDispatch** y **useAppSelector**.

### Para usar redux

7. Llamamos a nuestros hooks **useAppSelector** y **useAppDispatch** en el componente _HomePage_ que es donde lo vamos a utilizar. Y utilizamos las acciones en los botones.

8. Hacemos la llamada a la API en _userAPI.ts_.

9. Importamos la llamada a la API que hemos creado en el **store**.
