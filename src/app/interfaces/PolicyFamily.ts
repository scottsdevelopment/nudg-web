import Policy from './Policy';

export default interface PolicyFamily {
    name: string,
    abbreviation: string,
    policies: Policy[];
}