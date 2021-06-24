import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test.only("it should return an array", () => {
    expect(filterPokemon(mockPokemonsData, "")).toEqual([]);
  });

  test("it should return an empty array", () => {
    expect(filterPokemon(mockPokemonsData, "").length).toEqual(0);
  });

  test("it should return an array with charizard object", () => {
    const charizard = {
      name: "charizard",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
      },
      videoLink: "https://www.youtube.com/watch?v=evvO5Gcl-mo"
    };
    expect(filterPokemon(mockPokemonsData, "charizard")[0].name).toEqual(
      "charizard"
    );
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });
});
