
document.addEventListener('DOMContentLoaded', () => {
    conf12h();
});

export function conf12h() {
    const config = document.createElement('DETAILS');
    config.setAttribute('id', 'configurar12h');
    const summary = document.createElement('SUMMARY');
    summary.innerHTML = `&#9881;`;
    config.appendChild(summary);
    
    if (!document.getElementById('miCheckbox')) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'miCheckbox';
        checkbox.checked = true;

        const label = document.createElement('label');
        label.htmlFor = 'miCheckbox';
        label.textContent = 'Ver "am" "pm"';

        let estils = document.getElementById('dynamicStyles');
        if (!estils) {
            estils = document.createElement('style');
            estils.id = 'dynamicStyles';
            document.head.appendChild(estils);
        }

        const updateSupVisibility = () => {
            if (checkbox.checked) {
                estils.textContent = `
                    sup {
                        display: inline !important;
                    }
                `;
            } else {
                estils.textContent = `
                    sup {
                        display: none !important;
                    }
                `;
            }
        };

        updateSupVisibility();

        checkbox.addEventListener('change', updateSupVisibility);

        const mostrarConfiguracion = document.getElementById('caja12h');
        if (mostrarConfiguracion) {
            label.appendChild(checkbox);
            config.appendChild(label);
            mostrarConfiguracion.appendChild(config);
        } else {
            console.error('Element with ID "caja12h" not found.');
        }
    }
}
