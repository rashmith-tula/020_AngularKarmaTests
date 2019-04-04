import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('reverse a string', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello world')).toEqual('dlrow olleh');
  });
});
