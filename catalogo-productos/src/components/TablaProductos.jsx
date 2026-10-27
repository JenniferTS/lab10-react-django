import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'

const soles = (n) => `S/ ${n.toFixed(2)}`

function TablaProductos({ productos }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-slate-50">
          <TableHead className="w-24">Código</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead className="text-right">Precio</TableHead>
          <TableHead>Categoría</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productos.map((p) => (
          <TableRow key={p.codigo}>
            <TableCell className="font-mono">{String(p.codigo).padStart(3, '0')}</TableCell>
            <TableCell className="font-medium">{p.descripcion}</TableCell>
            <TableCell className="text-right">{soles(p.precio)}</TableCell>
            <TableCell>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                {p.categoria}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TablaProductos
