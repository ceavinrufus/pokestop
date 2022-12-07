import React from "react";
import { hexToGrayscale, types } from "../functions/color";
import {
  capitalize,
  capitalizeEachFirstLetter,
  meterToFeet,
} from "../functions/stringManipulation";

function PokemonMainInfo({ pokemon, details }) {
  return (
    <>
      <table className="w-full lg:w-2/3">
        <tbody
          className={`text-xs md:text-md lg:text-xl text-left divide-y-2 divide-${
            pokemon.types &&
            hexToGrayscale(types[pokemon.types[0].type?.name][1])
          }`}
        >
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin">National No</th>
            <td className="pr-4 py-2">
              {pokemon.id && `#${("000" + pokemon.id).slice(-3)}`}
            </td>
          </tr>
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin md:pr-8 lg:pr-16">
              Category
            </th>
            <td className="pr-4 py-2">
              {details.genera &&
                `${
                  details.genera.find((gen) => gen.language?.name == "en").genus
                }`}
            </td>
          </tr>
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin">Ability(s)</th>
            <td className="pr-4 py-2">
              {pokemon.abilities &&
                pokemon.abilities.map((ability) =>
                  ability.is_hidden ? (
                    <p className="opacity-50" key={ability.slot}>
                      {`${ability.slot}. ${capitalizeEachFirstLetter(
                        ability.ability.name,
                        "-"
                      )} (Hidden)`}
                    </p>
                  ) : (
                    <p key={ability.slot}>
                      {`${ability.slot}. ${capitalizeEachFirstLetter(
                        ability.ability.name,
                        "-"
                      )}`}
                    </p>
                  )
                )}
            </td>
          </tr>
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin">Weight</th>
            <td className="pr-4 py-2">
              {pokemon.weight / 10} kg (
              {((pokemon.weight / 10) * 2.2046).toFixed(1)} lbs)
            </td>
          </tr>
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin">Height</th>
            <td className="pr-4 py-2">
              {pokemon.height / 10} m ({meterToFeet(pokemon.height / 10)})
            </td>
          </tr>
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin">Shape</th>
            <td className="pr-4 py-2">
              {details.shape && capitalize(details.shape?.name)}
            </td>
          </tr>
          <tr>
            <th className="lg:pl-4 md:pl-2 font-thin">Color</th>
            <td className="pr-4 py-2">
              {details.shape && capitalize(details.color?.name)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PokemonMainInfo;
