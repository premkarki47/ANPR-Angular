import { PasswordrestModule } from './passwordrest.module';

describe('PasswordrestModule', () => {
  let passwordrestModule: PasswordrestModule;

  beforeEach(() => {
    passwordrestModule = new PasswordrestModule();
  });

  it('should create an instance', () => {
    expect(passwordrestModule).toBeTruthy();
  });
});
