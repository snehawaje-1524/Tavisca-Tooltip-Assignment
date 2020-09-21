import { OrxeTooltip } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-tooltip-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Tooltip;

  beforeEach(async () => {
    OrxeTooltip;
    document.body.appendChild(document.createElement('Tooltip'));
    Tooltip = document.querySelector('Tooltip') as OrxeTooltip;
  });

  afterEach(() => {
    Tooltip.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Tooltip);
    expect(result).toHaveNoViolations();
  });
});
