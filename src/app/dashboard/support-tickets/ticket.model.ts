export interface TicketModel{
    id:string;
    title:string;
    request:string;
    status:'open'|'in-progress'|'closed';
}