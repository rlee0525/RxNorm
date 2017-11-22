export const RECEIVE_DRUG = "RECEIVE_DRUG";
export const RECEIVE_RELATED_DRUGS = "RECEIVE_RELATED_DRUGS";

export const addHistory = query => (
  $.ajax({
    method: 'POST',
    url: `api/search_histories`,
    data: { name: query.name, count: query.count }
  })
);

const fetchDrug = query => (
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
  fetchDrug(query)
    .then(drug => dispatch(receiveDrug(drug)))
);

const fetchRelatedDrugs = query => (
  $.ajax({
    method: 'GET',
    url: `https://rxnav.nlm.nih.gov/REST/rxcui/${query}/related.json?tty=SCD+SBD`
  })
);

const receiveRelatedDrugs = drugs => ({
  type: RECEIVE_RELATED_DRUGS,
  drugs
});

export const searchRelatedDrugs = query => dispatch => (
  fetchRelatedDrugs(query)
    .then(drugs => dispatch(receiveRelatedDrugs(drugs)))
);