import Tooltip from './tooltip';
import { describe, expect, beforeEach, afterEach, test } from '@jest/globals'


describe('Tooltip', () => {
  let tooltip;

  beforeEach(() => {
    // Create a new instance of Tooltip before each test
    tooltip = new Tooltip();
  });

  afterEach(() => {
    // Clean up any elements or listeners after each test
    document.body.innerHTML = '';
  });

  test('Tooltip renders a div element with the correct id', () => {
    const renderedTooltip = tooltip.render();
    expect(renderedTooltip.tagName).toBe('DIV');
    expect(renderedTooltip.id).toBe('tooltip');
  });

  // You can add more tests here to cover other aspects of your Tooltip class
  test('Tooltip text is initially hidden', () => {
    const renderedTooltip = tooltip.render();
    const tooltipText = renderedTooltip.querySelector('#tooltipText');
    expect(tooltipText.style.display).toBe('');
  });
});
