# recuperatorio
- La tabla "users" provista no tenia datos, tampoco una columna para asignarle un rol. Se agregó la columna "role" INT(1), se dieron de alta varios usuarios con role = 0 por defecto, a un usuario se le asigno el role = 9(administrador) por SQL.
- En la tabla "movies" existen dos peliculas con la columna gener_id = NULL lo que hace que, al ser una Foreing Key, cuando se pide el detalle de dicha película la vista de un error
