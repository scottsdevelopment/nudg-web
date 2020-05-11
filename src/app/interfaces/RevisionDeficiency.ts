export default interface RevisionDeficiency {
    id: number,
    name: string,
    description: string,
    source: string,
    dateDetection: Date;
    dateStatus: Date;
    status: string;
    totalMilestones: number;
    revisionId?: number;
}