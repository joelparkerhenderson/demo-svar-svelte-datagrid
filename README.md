# Demo SVAR UI Svelte DataGrid

```sh
npx sv create demo-svar-svelte-datagrid && cd $_
git init && git add -A && git commit -m "Init"
pnpm run dev --open
pnpm install @svar-ui/svelte-grid
```

Edit the starter page file `src/routes/+page.svelte`.

Replace the starter page text with:

```svelte
<script>
    import { Grid } from "@svar-ui/svelte-grid";

    const data = [{
            id: 1,
            name: "Alice",
        },
        {
            id: 2,
            name: "Bob",
        },
    ];

    const columns = [{
            id: "id",
            width: 50
        },
        {
            id: "name",
            width: 100,
            header: "Name",
            footer: "Name",
        },
    ];

</script>

<Grid {data} {columns} />
```

Verify the starter page runs.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
