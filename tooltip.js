// tooltip.js
const tooltipCSS = `
  .tooltip {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`;

// Inject the styles into the document
const styleElement = document.createElement('style');
styleElement.textContent = tooltipCSS;
document.head.appendChild(styleElement);

const tooltipDirective = {
    beforeMount(el, binding) {
        const tooltipText = binding.value;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipText;
        document.body.appendChild(tooltip);

        el._tooltip = tooltip;

        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('mousemove', moveTooltip);

        function showTooltip() {
            tooltip.style.opacity = 1;
        }

        function hideTooltip() {
            tooltip.style.opacity = 0;
        }

        function moveTooltip(event) {
            const rect = el.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const left = event.clientX - tooltipRect.width / 2;
            const top = rect.top - tooltipRect.height - 10;
            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        }
    },
    unmounted(el) {
        el.removeEventListener('mouseenter', showTooltip);
        el.removeEventListener('mouseleave', hideTooltip);
        el.removeEventListener('mousemove', moveTooltip);
        if (el._tooltip) {
            document.body.removeChild(el._tooltip);
            delete el._tooltip;
        }
    }
};

export default tooltipDirective;