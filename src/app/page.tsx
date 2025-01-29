
import Button from "./components/Butto";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <div>
    <Navbar/>

    <Button title="Tecnologia"/>

    <h1 className="text-blue-50 font-bold  text-4xl">Hello word</h1>

    <p className="text-base font-bold text-zinc-500 font-r">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam minus enim magnam, excepturi hic quis neque earum obcaecati, et repellendus incidunt ipsum cum error ex labore. Praesentium, quae eligendi.</p>
    
    </div>
  );
}
