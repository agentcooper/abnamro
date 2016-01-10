document.write(
    JSON.stringify(
        Array.from(
            document.querySelectorAll('.mcf-mutations .mcf-tl[data-mutationdata]')
        ).map(function(node) {
            return JSON.parse(node.getAttribute('data-mutationdata'));
        })
    )
);
