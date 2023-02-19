export interface LoginType {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  error: number | null
}
