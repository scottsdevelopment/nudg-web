import PolicyRevision from './PolicyRevision';

export default interface Policy {
    id: number,
    name: string,
    status: boolean,
    nist: string,
    level: number,
    cmmc: string,
    taskType: string,
    revisions: PolicyRevision[]
}
  