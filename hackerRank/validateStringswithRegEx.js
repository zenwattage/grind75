function validateStringsWithRegEx(string) {
    let re = /^[a-z][1-9][^a-z][^A-Z][A-Z]/;
    return re.test(string);
}