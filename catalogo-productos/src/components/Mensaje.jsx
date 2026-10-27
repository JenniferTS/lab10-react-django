import { CircleCheck, CircleAlert, X } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

function Mensaje({ mensaje, onCerrar }) {
  if (!mensaje) return null
  const exito = mensaje.tipo === 'exito'

  return (
    <Alert
      variant={exito ? 'default' : 'destructive'}
      className={exito ? 'border-green-300 bg-green-50 text-green-800' : 'border-red-300 bg-red-50'}
    >
      {exito ? <CircleCheck /> : <CircleAlert />}
      <AlertTitle>{exito ? 'Registro exitoso' : 'Registro rechazado'}</AlertTitle>
      <AlertDescription className={exito ? 'text-green-700' : ''}>{mensaje.texto}</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 size-7"
        onClick={onCerrar}
        aria-label="Cerrar mensaje"
      >
        <X />
      </Button>
    </Alert>
  )
}

export default Mensaje
