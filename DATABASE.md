# Instrucciones de Base de Datos

## Configuración Completada

✅ Prisma instalado y configurado
✅ Cliente singleton creado en `lib/prisma.ts`
✅ Schema con modelos User y Report
✅ API Routes de ejemplo creadas

## Próximos Pasos

### 1. Configura tu Base de Datos

Edita el archivo `.env` y actualiza `DATABASE_URL` con tu conexión real:

**PostgreSQL:**

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db"
```

**MySQL:**

```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_db"
```

**SQLite (para desarrollo):**

```env
DATABASE_URL="file:./dev.db"
```

### 2. Genera el Cliente Prisma

```bash
npx prisma generate
```

### 3. Crea y Aplica Migraciones

```bash
npx prisma migrate dev --name init
```

Esto creará las tablas en tu base de datos.

### 4. (Opcional) Visualiza tus Datos

```bash
npx prisma studio
```

## Uso del Cliente

El cliente Prisma está disponible importando:

```typescript
import prisma from "@/lib/prisma";

// Ejemplo de consulta
const users = await prisma.user.findMany();
```

## API Routes Creadas

- `GET /api/users` - Lista todos los usuarios
- `POST /api/users` - Crea un usuario
- `GET /api/reports` - Lista todos los reportes
- `POST /api/reports` - Crea un reporte

## Personalización

Edita `prisma/schema.prisma` para agregar tus propios modelos según tus necesidades.
