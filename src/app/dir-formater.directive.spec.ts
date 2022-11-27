import { DirFormaterDirective } from './dir-formater.directive';

describe('DirFormaterDirective', () => {
  it('should create an instance', () => {
    let mockElementRef = {
      nativeElement: {}
    }
    const directive = new DirFormaterDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
