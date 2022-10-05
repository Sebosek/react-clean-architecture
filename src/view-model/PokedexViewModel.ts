import {Pokemon} from "../types/pokemon";
import {PokemonDetails} from "../types/pokemon-details";
import {PokemonService} from "../model/PokemonService";
import {makeAutoObservable, runInAction} from "mobx";

export class PokedexViewModel {
  public loading = false;
  public all: Array<Pokemon> = [];
  public selected: PokemonDetails | undefined;
  public error: string = '';
  
  constructor(private readonly _model: PokemonService) {
    makeAutoObservable<PokedexViewModel>(this);
  }
  
  public async load() {
    this.loading = true;
    this.error = '';
    
    try {
      const all = await this._model.fetch();
      runInAction(() => this.all = all);
    } catch {
      this.error = 'Unable to load Pokémon list!'
    } finally {
      this.loading = false;
    }
  }

  public async read(id: number | undefined) {
    if (!id) {
      runInAction(() => this.selected = undefined);
      return;
    }
    
    this.loading = true;
    this.error = '';
    
    const checked = Math.min(Math.max(id, 1), 151);
    try {
      const selected = await this._model.read(checked);
      runInAction(() => this.selected = selected);
    } catch {
      this.error = 'Unable to load Pokémon details!'
    } finally {
      this.loading = false;
    }
  }
}
