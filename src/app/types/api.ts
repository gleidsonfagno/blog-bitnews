export interface CardProps {
  title: string;
  description: string;
  bg_image: string;
  button: string;
  date: string; // Certifique-se de que o nome do campo corresponde ao que a API retorna
}

export interface NavBarProps {
    title?: string;
}