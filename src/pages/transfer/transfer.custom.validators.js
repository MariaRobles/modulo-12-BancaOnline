

export const dayValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;
  
    return {
      succeeded,
      message: succeeded ? '' : 'Introduce un número entre el 1 y el 31',
      type: '',
    }
  }
  
  export const monthValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;
    return {
      succeeded,
      message: succeeded ? '' : 'Introduce un número entre el 1 y el 12',
      type: '',
    }
  }
  
  export const yearValidator = ({ value }) => {
    const succeeded = parseInt(value) >= new Date().getFullYear();
    return {
      succeeded,
      message: succeeded ? '' : 'Introduce un fecha mayor que la fecha actual',
      type: '',
    }
  }

  