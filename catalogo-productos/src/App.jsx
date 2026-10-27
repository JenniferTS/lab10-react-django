import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FormularioProducto from '@/components/FormularioProducto'
import TablaProductos from '@/components/TablaProductos'
import Mensaje from '@/components/Mensaje'
import { productosIniciales } from '@/data/productosIniciales'

function App() {
  // Estado en memoria: al recargar la página vuelven los 5 productos iniciales
  const [productos, setProductos] = useState(productosIniciales)
  const [mensaje, setMensaje] = useState(null)

  // Código único: el mayor código existente + 1 (nunca se repite)
  const siguienteCodigo = () =>
    productos.reduce((max, p) => Math.max(max, p.codigo), 0) + 1

  const registrarProducto = (datos) => {
    const nuevo = { codigo: siguienteCodigo(), ...datos }
    setProductos([...productos, nuevo]) // arreglo nuevo, no se muta el anterior
    setMensaje({
      tipo: 'exito',
      texto: `Producto "${nuevo.descripcion}" registrado con el código ${nuevo.codigo}.`,
    })
  }

  const rechazarRegistro = () =>
    setMensaje({ tipo: 'error', texto: 'No se registró el producto: revisa los campos marcados en rojo.' })

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Gestión de productos</h1>
          <p className="text-slate-600">Catálogo de prueba con datos simulados en memoria (sin backend).</p>
        </header>

        <Mensaje mensaje={mensaje} onCerrar={() => setMensaje(null)} />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Registrar producto</CardTitle>
              <CardDescription>El código se genera automáticamente.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormularioProducto
                onRegistrar={registrarProducto}
                onRechazar={rechazarRegistro}
                onLimpiar={() => setMensaje(null)}
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Productos registrados</CardTitle>
              <CardDescription>{productos.length} productos en el catálogo.</CardDescription>
            </CardHeader>
            <CardContent>
              <TablaProductos productos={productos} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default App
