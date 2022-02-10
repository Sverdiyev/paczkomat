interface appStateType {
  page: 0 | 1 | 2 | 3;
  phone?: string;
  code?: string;
  codeIsValid?: boolean;
  phoneIsValid?: boolean;
  buttonIsDisabled?: boolean;
  phoneIsTouched: boolean;
  codeIsTouched: boolean;
}
