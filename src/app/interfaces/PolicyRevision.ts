import PolicyObjective from './PolicyObjective';
import PolicyProcedure from './PolicyProcedure';
import ProcedureControl from './ProcedureControl';
import RevisionDeficiency from './RevisionDeficiency';
import RevisionProcess from './RevisionProcess';

export default interface PolicyRevision {
    number: string;
    status: string;
    objective?: PolicyObjective;
    procedure?: PolicyProcedure;
    procedureControl?: ProcedureControl;
    deficiencies?: RevisionDeficiency[];
    processes?: RevisionProcess[];
}
