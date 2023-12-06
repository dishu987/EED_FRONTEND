export interface Student {
    id: string;
    name: string;
    email: string;
    mobile: string;
    batch: string;
    degree: string;
}

export interface StudentListInterface {
    data: Student[];
    isLoading: false;
    isSuccessful: false;
    isExpired: false;
    error: {};
}