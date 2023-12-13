# TODO (DONE)

- eslint & prettier
- Supabase Linkage
- router settings
- Layout Title
- Footer
- react-query
- Suspense & ErrorBoundary
- useContext modal & toast
- RHF - MUI
- Responsive
- PWA Settings
- Splash & Favicon
- Deploy by Vercel
- Mock Service Worker

## Set up supabase

```
npx supabase login
npx supabase init
npx supabase link --project-ref (ReferenceID)
npx supabase gen types typescript --linked > src/lib/schema.ts
```

## Naming Rules

- Constant Object

```
const UPPER_CASE: Type = {
  camelCase: 'aaa',
  bbb: 'bbb"
}
```

- Type

```
type TypeType = {
  aaa: 'string',
  bbb: 123
}
```
