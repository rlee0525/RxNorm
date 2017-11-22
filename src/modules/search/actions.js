export const RECEIVE_DRUG = "RECEIVE_DRUG";

const searchDrugUtil = query => (
  $.ajax({
    method: 'GET',
    url: `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${query}`
  })
);

const receiveDrug = drug => ({
  type: RECEIVE_DRUG,
  drug
});

export const searchDrug = query => dispatch => (
  searchDrugUtil(query)
    .then(drug => dispatch(receiveDrug(drug)))
);