# Laboratorio 10 – Componentes y eventos

Desarrollo de Aplicaciones Empresariales · Sharon Trujillo Sulca · Grupo D

| Carpeta | Contenido |
|---|---|
| `api_productos/` | Servicio web en Django que devuelve el listado de productos en JSON, con `django-cors-headers` habilitado. |
| `lab10/` | Proyecto React (create-react-app) con componente de clase que consume la API y muestra "recuperando datos..." mientras carga. |
| `catalogo-productos/` | Tarea: catálogo de productos con React + Vite + shadcn/ui + Tailwind CSS, con datos en memoria, formulario validado y tabla. |

## 1. API Django

```sh
cd api_productos
python -m venv venv
venv\Scripts\activate        # en Linux/macOS: source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver 8001
```

Endpoint: <http://127.0.0.1:8001/api/productos/>

> Uso el puerto 8001 porque en mi equipo el 8000 estaba ocupado. Si cambias el puerto, actualiza la URL del `fetch` en `lab10/src/App.js`.

## 2. React (create-react-app)

```sh
cd lab10
npm install
npm start
```

Abre <http://localhost:3000> (la API de Django debe estar corriendo).

## 3. Tarea: catálogo con Vite + shadcn/ui

```sh
cd catalogo-productos
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto <http://localhost:5173>).

- Componentes de shadcn/ui: Button, Input, Label, Card, Table, Alert y Select.
- Estado con `useState`; los productos se guardan solo en memoria, al recargar vuelven los 5 iniciales.
- Validaciones: descripción obligatoria (mínimo 3 caracteres), precio mayor que 0 y categoría obligatoria.
- El código de cada producto nuevo se genera automáticamente (mayor código + 1).
