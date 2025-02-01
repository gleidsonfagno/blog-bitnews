import { CardProps } from "../types/api";
import Button from "./Button";


export default function CardeDestaque({title, description, bg_image, button, date}: CardProps) {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[400px] max-w-6xl mx-auto relative rounded-md"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1)), url('${bg_image}')`,
      }}
    >
      <article className="absolute bottom-0 p-4 flex flex-col items-start justify-between gap-4 align-bottom">
        <div className="flex flex-row items-center justify-between w-full">
          <Button title={button} />
          <span className="font-bold text-xs">{date}</span>
        </div>

        <h1 className="font-bold text-4xl">
          {title}
        </h1>
        <p className="font-bold text-base">
          {description}
        </p>
      </article>
    </div>
  );
}
