import PolicyObjective from './PolicyObjective';
import PolicyProcedure from './PolicyProcedure';
import ProcedureControl from './ProcedureControl';

export default interface PolicyRevision {
    number: string;
    status: string;
    objective?: PolicyObjective;
    procedure?: PolicyProcedure;
    procedureControl?: ProcedureControl;
}
