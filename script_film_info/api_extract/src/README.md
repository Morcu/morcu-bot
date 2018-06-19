Proceso que inserta en elastic datos extraidos de mongo, procesando el campo de startyear, si este no es un numero se le asigna el valor de 1.

esto es necesario dado que a la hora de hacer la busqueda en mongo, se aplica un filtro que las ordena de mayor a menor, esta ordenacion se hace en tiempo de query.ç


El proceso de indexado se hace mediante steps (el proceso no es totalmente automatico ya que hay que poner a mano el limite de indexacion y el paso de documentos indexados) aunque el proceso de indexado por pasos es recursivo
