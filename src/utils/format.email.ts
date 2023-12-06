export const FormatEmail = (email: string) => {
    return email
        .replace("@", "[at]")
        .replace(".", "[dot]")
}