export default interface Card{
    
    id?:number;
    owner:string,
    title:string;
    subtitle?:string;
    description:string;
    phone:string;
    email:string;
    web?:string;
    image:string;
    state?:string;
    country:string;
    city:string
    street:string
    housenumber?:number;
    zip?:number;

}