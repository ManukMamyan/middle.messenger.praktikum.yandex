import Fab from '../Fab';

jest.mock('nanoid', () => {
  return { nanoid: () => '123' };
});
jest.mock('../Fab/style.scss', () => {});

describe('component Fab', () => {
  const icon = 'icon';
  const onClick = jest.fn();

  it('should render correct html according to props', () => {
    const fab = new Fab({ icon, onClick });

    expect(fab.element?.tagName).toBe('BUTTON');
    expect(fab.element?.className).toBe('fab');
    expect(fab.element?.textContent).toBe('icon');

    fab.element?.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
