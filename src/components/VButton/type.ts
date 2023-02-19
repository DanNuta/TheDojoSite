export interface ButtonType {
  title: string;
  error: number | null,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
