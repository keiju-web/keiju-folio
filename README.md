# keiju-folio Project

# TODO

- eslint
- materialUI
- supabase auth type
- router settings
- Layout Title
- react-query

- common Loading Suspense
- useContext modal
- mock

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
