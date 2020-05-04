import Policy from './Policy';

export default interface PolicyFamily {
    id: number,
    name: string,
    abbreviation: string,
    policies: Policy[];
}