export interface FacultyInterface {
    id: string;
    name: string;
    designation: string;
    email: string;
    research_interests: string;
    homepage: string;
    profile_image: string;
    subject: string;
    mobile: string;
    is_admin?: boolean;
    last_logged_in?: string
}

export interface TagWiseInterface {
    tagName: FacultyInterface[],
}

export interface FacultyListInterface {
    data: TagWiseInterface[];
    isLoading: false;
    isSuccessful: false;
    isExpired: false;
    error: {};
}