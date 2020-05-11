import Policy from './Policy';
import PolicyFamily from './PolicyFamily';
import RevisionDeficiency from './RevisionDeficiency';
import PolicyRevision from './PolicyRevision';
import PolicyObjective from './PolicyObjective';
import ProcedureControl from './ProcedureControl';
import PolicyProcedure from './PolicyProcedure';
import RevisionProcess from './RevisionProcess';

export default interface AppState {
    deficiencies: RevisionDeficiency[],
    objectives: PolicyObjective[],
    policies: Policy[],
    policyFamilies: PolicyFamily[],
    procedureControls: ProcedureControl[],
    procedures: PolicyProcedure[],
    proccesses: RevisionProcess[],
    revisions: PolicyRevision[]
}
