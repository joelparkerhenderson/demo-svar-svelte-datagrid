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

<h1>Demo SVAR Svelte DataGrid</h1>
