import PolicyObjective from './PolicyObjective';
import PolicyProcedure from './PolicyProcedure';
import PolicyControl from './PolicyControl';

export default interface PolicyRevision {
    number: string;
    status: string;
    objective?: PolicyObjective;
    procedure?: PolicyProcedure;
    control?: PolicyControl;
}
