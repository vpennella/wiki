Tal vez convenga aclarar que esta no es una categorización teórica, es más bien una introducción y vamos de lo más simple a lo más complejo.

Tipos simples y compuestos
--------------------------

### Básicos: caracteres y booleanos

Los tipos más básicos que tenemos en Haskell son los booleanos y los caracteres, que tiene los tipos y respectivamente:

`Prelude> :t True`
`True :: Bool`
`Prelude> :t 'a'`
`'a' :: Char`

Los números son un poquito más complejos porque tenemos números enteros, reales, racionales y muchas más variantes así que por un momento los vamos a dejar afuera.

### Listas y Strings

Un String es simplemente una lista de caracteres; se puede escribir o :

`Prelude> :t "Hola"`
`"Hola" :: [Char]`

Más aún, para cualquier lista el tipo se escribe poniendo entre corchetes el tipo de los elementos la lista, por ejemplo una lista de booleanos:

`Prelude> :t [True, False]`
`[True, False] :: [Bool]`

También una lista de Strings (o lista de listas de caracteres):

`Prelude> :t ["Hola", "Chau"]`
`["Hola", "Chau"] :: [ [Char] ]`

### Tuplas

TBC

Funciones
---------

### Funciones con un único parámetro

El tipo de una función que tiene un parámetro se indica relacionando mediante el símbolo la entrada o dominio de la función con la salida o imagen. Por ejemplo la función not recibe un booleano y devuelve otro:

`Prelude> :t not`
`not :: Bool -> Bool`

La función recibe un caracter y devuelve un booleano:

`Prelude> :t Char.isLower`
`Char.isLower :: Char -> Bool`

Y la función recibe una lista de booleanos y devuelve un booleano (*and*ea todos los booleanos de la lista)

`Prelude> :t and`
`and :: [Bool] -> Bool`

### Funciones con más de un parámetro

Las funciones de más de un parámetro tienen alguna sutileza porque en Haskell se trabaja con el concepto de [Currificación](currificacion.html), entonces una función que nosotros en matemática estaríamos acostumbrados a verla como en Haskell la vamos a escribir . Las funciones de dos parámetros cuyo tipo tiene esa forma se denominan *currificadas*. (A los efectos de entender el sistema de tipos podemos pensarlo simplemente como una función que recibe dos booleanos, aunque en realidad la versión currificada es mucho más poderosa. Para más detalles ver la teoría sobre [Currificación](currificacion.html).)

El tipo que usamos como ejemplo en el párrafo anterior corresponde (entre otros) a la función

`Prelude> :t (&&)`
`(&&) :: Bool -> Bool -> Bool`

Polimorfismo
------------

TBC: head, fst, length