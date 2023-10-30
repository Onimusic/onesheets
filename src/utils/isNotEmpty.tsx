export const isNotEmpty = (obj: string | number | object | null | undefined): boolean => {
    console.log(obj !== undefined && obj !== null && obj !== "")
    return obj !== undefined && obj !== null && obj !== "";
}
