import Immutable from 'seamless-immutable';
import * as ActionTypes from './AppConstants';

// eslint-disable-next-line new-cap
const initialState = Immutable({
    complianceSummary: {},
    complianceFetchStatus: '',
    criticalVulnerabilities: {},
    criticalVulnerabilitiesFetchStatus: '',
    latestVulnerabilities: {},
    latestVulnerabilitiesFetchStatus: ''
});

export const DashboardStore = (state = initialState, action) => {
    switch (action.type) {
        // COMPLIANCE
        case `${ActionTypes.COMPLIANCE_FETCH}_PENDING`:
            return state.set('complianceFetchStatus', 'pending');
        case `${ActionTypes.COMPLIANCE_FETCH}_FULFILLED`:
            return Immutable.merge(state, {
                complianceSummary: action.payload,
                complianceFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.COMPLIANCE_FETCH}_REJECTED`:
            return state.set('complianceFetchStatus', 'rejected');

        // VULN
        case `${ActionTypes.CRITICAL_VULNERABILITIES_FETCH}_PENDING`:
            return state.set('criticalVulnerabilitiesFetchStatus', 'pending');
        case `${ActionTypes.CRITICAL_VULNERABILITIES_FETCH}_FULFILLED`:
            return Immutable.merge(state, {
                criticalVulnerabilities: action.payload,
                criticalVulnerabilitiesFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.CRITICAL_VULNERABILITIES_FETCH}_REJECTED`:
            return state.set('criticalVulnerabilitiesFetchStatus', 'rejected');

        case `${ActionTypes.LATEST_VULNERABILITIES_FETCH}_PENDING`:
            return state.set('latestVulnerabilitiesFetchStatus', 'pending');
        case `${ActionTypes.LATEST_VULNERABILITIES_FETCH}_FULFILLED`:
            return Immutable.merge(state, {
                latestVulnerabilities: action.payload,
                latestVulnerabilitiesFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.LATEST_VULNERABILITIES_FETCH}_REJECTED`:
            return state.set('latestVulnerabilitiesFetchStatus', 'rejected');

        case `${ActionTypes.VULNERABILITIES_FETCH}_PENDING`:
            return state.set('vulnerabilitiesFetchStatus', 'pending');
        case `${ActionTypes.VULNERABILITIES_FETCH}_FULFILLED`:
            return Immutable.merge(state, {
                vulnerabilities: action.payload,
                vulnerabilitiesFetchStatus: 'fulfilled'
            });
        case `${ActionTypes.VULNERABILITIES_FETCH}_REJECTED`:
            return state.set('vulnerabilitiesFetchStatus', 'rejected');

        default:
            return state;
    }
};
