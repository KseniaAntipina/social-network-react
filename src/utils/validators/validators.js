

export const required = (value) => {
     return value ? undefined : "Required";
}

export const maxLengthCreator = (maxLength) => (value) => {
     if  (value && value.length > maxLength)  return `Max length is ${maxLength} symbols`
     return undefined
}



