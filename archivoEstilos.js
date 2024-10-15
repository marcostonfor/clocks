export const estilosPersonales = `
    #caja12h {
        display: flex;
    }

    summary::marker {
        content: none !important;
    }

    summary {
        cursor: pointer !important;
        color: orangered;
        text-decoration: underline;
        margin: 0.5vh auto;
        font-size: 12pt;
    }

    summary::after {
        content: "ocultar am-pm";
    }


    #reloj12h, #reloj24h {
        margin-left: 2vw;
    }
    `;
