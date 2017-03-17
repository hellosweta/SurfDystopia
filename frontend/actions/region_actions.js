import * as APIUtil from '../util/region_api_util';

export const RECEIVE_REGIONS = "RECEIVE_REGIONS";
export const RECEIVE_REGION = "RECEIVE_REGION";

export const fetchRegions = () => dispatch => (
  APIUtil.fetchRegions()
    .then(listings => dispatch(receiveRegions(listings)))
);

export const fetchRegion = id => dispatch => (
  APIUtil.fetchRegion(id)
    .then(listing => dispatch(receiveRegion(listing)))
);

export const receiveRegions = (regions) => ({
  type: RECEIVE_REGIONS,
  regions
});

export const receiveRegion = (region) => ({
  type: RECEIVE_REGION,
  region
});
