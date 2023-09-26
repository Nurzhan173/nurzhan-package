import './tooltip.css';
/**
 * @module Tooltip
 */

/**
 * Need to create div element with id #tooltip
 * for text inside tooltip need to create div with id #tooltipText
 * @type {HTMLElement} tooltip - tooltip div wrapper
 * @type {HTMLElement} tooltipText - tooltip text
 * @returns {HTMLElement} returns tooltip
 */

class Tooltip {

  constructor() {
    window.addEventListener('scroll', function() {
      const tooltip = document.getElementById('tooltip');
      const tooltipText = document.getElementById('tooltipText');
      const tooltipRect = tooltip.getBoundingClientRect();

      if(tooltipRect.top < 50) {
        tooltipText.style.top = "130%";
        tooltipText.style.setProperty("--tooltip-top", "-60%");
        tooltipText.style.setProperty("--tooltip-transform", "translateX(-50%) rotate(180deg)");
      } else if (tooltipRect.top > -50) {
        tooltipText.style.top = "-130%";
        tooltipText.style.setProperty("--tooltip-top", "100%");
        tooltipText.style.setProperty("--tooltip-transform", "translateX(-50%)");
      }
    });
  }

  render() {
    const tooltip = document.createElement('div');
    const tooltipText = document.createElement('span');

    tooltip.id = 'tooltip';
    tooltipText.id = 'tooltipText';

    tooltip.appendChild(tooltipText);

    return tooltip;
  }
}

export default Tooltip;
