import Button from '../Button';

jest.mock('nanoid', () => {
  return { nanoid: () => '123' };
});
jest.mock('../Button/style.scss', () => {});

describe('component Button', () => {
  const text = 'buttontext';
  const size = 'small';
  const onClick = jest.fn();

  it('should render correct html according to props', () => {
    const button = new Button({ text, size, onClick });

    expect(button.element?.tagName).toBe('BUTTON');
    expect(button.element?.className).toBe('button small');
    expect(button.element?.textContent).toBe('buttontext');

    button.element?.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
