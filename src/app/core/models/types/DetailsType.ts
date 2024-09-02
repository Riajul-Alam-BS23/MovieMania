export interface DetailsType{
    id?: number;
    media_type?: string;
    recommendations?: string;
    page?: number;
}




export interface DataType{
    media?: string;
    // recommendations?: string;
    page?: number;
    media_type?: string;
}

export interface Type{
    media?: string;
    page?: number;
    media_type?: string;
    queryParams?: any;
}