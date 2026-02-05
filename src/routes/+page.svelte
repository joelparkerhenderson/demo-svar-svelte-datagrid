<script>
    // Import the SVAR Svelte DataGrid
    import { Grid } from "@svar-ui/svelte-grid";

    // Apply the SVAR prebuilt theme named Willow.
    import { Willow } from "@svar-ui/svelte-grid";

    // An array of objects with SVAR Svelte DataGrid columns settings.
    // https://docs.svar.dev/svelte/grid/api/properties/columns#parameters
    const columns = [{
            id: "id",
            width: 50,
            sort: true,
            header: "Id",
            footer: "Id",
        },
        {
            id: "name",
            width: 100,
            sort: true,
            header: "Name",
            footer: "Name",
        },
    ];

    const data = [{
            id: 1,
            name: "Alice",
        },
        {
            id: 2,
            name: "Bob",
        },
    ];

    let mounted = $state(false);
    import { onMount } from "svelte";

    // Workaround for macOS: Command+click for multi-column sort.
    // SVAR uses Ctrl+click, but on macOS Ctrl+click triggers context menu.
    // Track if Command (metaKey) or Ctrl was pressed during last header click.
    let modifierKeyPressed = false;

    onMount(() => {
        mounted = true;
    });

    // Initialize a capture-phase listener when a container element is bound
    function listenForClickWithCtrlKeyOrMetaKey(node) {
        node.addEventListener('click', (event) => {
            // Support both Ctrl Key (Windows/Linux) Command Key (macOS) 
            modifierKeyPressed = event.metaKey || event.ctrlKey;
        }, { capture: true });
    }

    let api;
    function init(gridApi) {
        api = gridApi;
        // Intercept sort-rows to enable multi-sort when modifier key is pressed
        api.intercept("sort-rows", (ev) => {
            // Force multi-column sort when Command/Ctrl was held
            if (modifierKeyPressed) {
                ev.add = true;
            }
            modifierKeyPressed = false;
        });
    }
</script>

<!-- Apply the SVAR prebuilt theme named Willow. -->
<Willow>
    {#if mounted}
        <!-- Listen for a click with a Ctrl Key or Meta Key to sort table headers. -->
        <div use:listenForClickWithCtrlKeyOrMetaKey>
            <!-- Render the SVAR Svelte DataGrid. -->
            <Grid {data} {columns} {init} />
        </div>
    {/if}
</Willow>
