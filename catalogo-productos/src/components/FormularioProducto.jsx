import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { CATEGORIAS } from '@/data/productosIniciales'

const VACIO = { descripcion: '', precio: '', categoria: '' }

function validar({ descripcion, precio, categoria }) {
  const errores = {}
  if (descripcion.trim() === '') errores.descripcion = 'La descripción es obligatoria.'
  else if (descripcion.trim().length < 3) errores.descripcion = 'La descripción debe tener al menos 3 caracteres.'

  if (precio === '') errores.precio = 'El precio es obligatorio.'
  else if (isNaN(Number(precio)) || Number(precio) <= 0) errores.precio = 'El precio debe ser un número mayor que 0.'

  if (categoria === '') errores.categoria = 'Selecciona una categoría.'
  return errores
}

function FormularioProducto({ onRegistrar, onRechazar, onLimpiar }) {
  const [form, setForm] = useState(VACIO)
  const [errores, setErrores] = useState({})

  const cambiar = (campo, valor) => setForm({ ...form, [campo]: valor })

  const enviar = (e) => {
    e.preventDefault()
    const encontrados = validar(form)
    setErrores(encontrados)
    if (Object.keys(encontrados).length > 0) {
      onRechazar()
      return // no se toca el estado de productos
    }
    onRegistrar({
      descripcion: form.descripcion.trim(),
      precio: Number(form.precio),
      categoria: form.categoria,
    })
    setForm(VACIO)
  }

  const limpiar = () => {
    setForm(VACIO)
    setErrores({})
    onLimpiar()
  }

  const rojo = (campo) => (errores[campo] ? 'border-red-500 focus-visible:ring-red-200' : '')

  return (
    <form onSubmit={enviar} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="descripcion">Descripción</Label>
        <Input
          id="descripcion"
          placeholder="Ej. Inca Kola 1 L"
          value={form.descripcion}
          onChange={(e) => cambiar('descripcion', e.target.value)}
          className={rojo('descripcion')}
        />
        {errores.descripcion && <p className="text-sm text-red-600">{errores.descripcion}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="precio">Precio de venta (S/)</Label>
        <Input
          id="precio"
          type="number"
          step="0.01"
          placeholder="0.00"
          value={form.precio}
          onChange={(e) => cambiar('precio', e.target.value)}
          className={rojo('precio')}
        />
        {errores.precio && <p className="text-sm text-red-600">{errores.precio}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="categoria">Categoría</Label>
        <Select value={form.categoria} onValueChange={(v) => cambiar('categoria', v)}>
          <SelectTrigger id="categoria" className={`w-full ${rojo('categoria')}`}>
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIAS.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errores.categoria && <p className="text-sm text-red-600">{errores.categoria}</p>}
      </div>

      <div className="flex gap-2 pt-2">
        <Button type="submit" className="flex-1">Registrar producto</Button>
        <Button type="button" variant="outline" onClick={limpiar}>Limpiar</Button>
      </div>
    </form>
  )
}

export default FormularioProducto
