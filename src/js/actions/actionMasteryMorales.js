export const ADD_MASTERY_MORALE = "add_mastery_morale";
export const REMOVE_MASTERY_MORALE = "remove_mastery_morale";
export const RESET_MASTERY_MORALES = "reset_mastery_morales";

export function addMasteryMorale(abilitiesArray, abilityId) {

  return {
    type: ADD_MASTERY_MORALE,
    payload: {
      abilitiesArray,
      abilityId 
    }
  };
}

export function removeMasteryMorale(abilitiesArray, abilityId) {
  
  return {
    type: REMOVE_MASTERY_MORALE,
    payload: {
      abilitiesArray,
      'abilityIndex': abilitiesArray.indexOf(abilityId)
    }
  };
}

export function resetMasteryMorales() {

  return {
    type: RESET_MASTERY_MORALES,
    payload: []
  };
}