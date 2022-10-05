import "./Pokedex.css";

import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Dropdown} from "primereact/dropdown";
import {Card} from "primereact/card";
import {Message} from "primereact/message";
import {useViewModel} from "../context/ViewModelContext";

const HINT = "Select a Pokémon";

const Pokedex = observer(() => {
  const {pokedex} = useViewModel();
  
  useEffect(() => {
    pokedex.load().catch(() => console.log('Failed'));
  }, [pokedex]);
  
  const selected = pokedex.selected;

  return (
    <Card title={selected?.name ?? HINT}>
      {pokedex.error && <Message className="w-full mb-5" severity="error" text={pokedex.error} />}
      <Dropdown
        className="w-full"
        optionLabel="name"
        optionValue="id"
        value={selected?.id} 
        options={pokedex.all} 
        onChange={(e) => pokedex.read(e.value)}
        placeholder={HINT}
        showClear
        filter 
      />
      {selected && <img src={selected.image} alt={selected.name} />}
    </Card>
  )
});

export default Pokedex;