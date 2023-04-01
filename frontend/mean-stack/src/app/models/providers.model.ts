export class Providers {

    id!: number;
    firstname!: string;
    lastname!: string;
    position!: string;
    company!: {
        company_name: string
        address: string
        city: string
        phone: string
        email: string
        description: string
        tagline: string
    }

}
