// Auth validations
export const userNameValidation = {
    required: 'userNameRequired',
}
export const emailValidation = {
    required: 'emailRequired',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
}

export const passwordValidation = {
  required: 'passwordRequired',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters long'
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: 'Password must contain both letters and numbers'
  }
}

export const password2Validation = {
  required: 'Please confirm your password',
  validate: value => value === password || 'Passwords do not match'
}


// Deck's validations

export const nameValidation = {
  required: "Name is required",
  minLength: {
      value: 3,
      message: "Name must be at least 3 characters long"
  }
};

export const formatValidation = {
  required: "Format is required"
  // Puedes agregar más reglas de validación si es necesario
};
