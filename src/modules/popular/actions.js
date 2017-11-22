export const RECEIVE_DRUGS = "RECEIVE_DRUGS";

const fetchPopularDrugs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/search_histories'
  })
);

const receiveDrugs = drugs => ({
  type: RECEIVE_DRUGS,
  drugs
});

export const getPopularDrugs = () => dispatch => (
  fetchPopularDrugs()
    .then(drugs => dispatch(receiveDrugs(drugs)))
);