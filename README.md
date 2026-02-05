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

    // Fix for Svelte 5 and SVAR Svelte DataGrid.
    let mounted = $state(false);
    import { onMount } from "svelte";
    onMount(() => { mounted = true; });
</script>

<!-- Apply the SVAR prebuilt theme named Willow. -->
<Willow>
    <!-- Wait for the data to be loaded because of timing. -->
    {#if mounted}
        <!-- Render the SVAR Svelte DataGrid. -->
        <Grid {data} {columns} />
    {/if}
</Willow>
```

Verify the starter page runs.

## Navigation

Navigation keys:

- Up/Down Arrows: move to the row above/below

- Shift + Left click: select the range of rows (if multiple selection is enabled via API)

- Ctrl + Left click: select multiple rows (if multiple selection is enabled via API).

## Sort

<https://docs.svar.dev/svelte/grid/guides/sorting_data>

To sort by one column, click a column header.

To sort by multiple columns, hold the Ctrl key and click column headers in the
desired order. The sort index appears in the column header for multi-column
sorting. Be aware there's an issue on macOS where the Ctrl key doesn't work the
same way. See below for our workaournd.

## Playwright testing

If you want to use Playwright and Chromium for testing:

```sh
pnpm install && npx playwright install chromium
```

## AI

<https://svelte.dev/docs/mcp/remote-setup>

If you want to add the Svelte MCP server, then run:

```sh
npx sv add mcp
```

For this demo, we create a file `MCPSERVERS.json` that has the configuration for our preferred MCP servers:

```json
{
  "mcpServers": {
    "svelte": {
      "command": "npx",
      "args": ["-y", "@sveltejs/mcp-server"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp"]
    },
    "webdriverio-mcp": {
      "command": "npx",
      "args": ["-y", "webdriverio-mcp"]
    }
  }
}
```

### Claude MCP servers

If you want to connect your user account to the Svelte MCP server, then run:

```sh
claude mcp add svelte --scope user --transport http https://mcp.svelte.dev/mcp
```

If you want to add Playwright for testing:

```sh
claude mcp add playwright npx @playwright/mcp@latest
```

If you want to add WebdriverIO MCP for browser automation:

```sh
pnpm i -g webdriverio-mcp
```

### Claude Svelte Skill

If you want to use the Claude Code Marketplace to install the Svelte plugin, then launch Claude Code and enter:

```sh
/plugin marketplace add sveltejs/mcp
/plugin install svelte
```

### AGENTS.md

If you use AI for coding, then you may want to create an AI guide file such as `AGENTS.md` or `CLAUDE.md` or `GEMINI.md`:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

Fetch https://docs.svar.dev/svelte/grid/
Fetch https://github.com/svar-widgets/grid
```

## Loading data

<https://docs.svar.dev/svelte/grid/guides/loading_data>

You can load data various ways:

- Load data on the page by defining a JavaScript array
- Load data from a local file by using the function `getData`.
- Load data from a server by fetching a URL.
- Load data (and save it) by using the helper `DataProvider`.
- Load data in chunks by using the option `dynamically`.

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
