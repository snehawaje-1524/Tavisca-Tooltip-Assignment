import { OrxeTooltip } from '../';

describe('orxe-tooltip', () => {
  let tooltip;

  beforeEach(async function () {
    OrxeTooltip;
    tooltip = (await document.body.appendChild(document.createElement('orxe-tooltip'))) as OrxeTooltip;
  });

  it('should create', () => {
    expect(tooltip).toBeTruthy();
  });

});


