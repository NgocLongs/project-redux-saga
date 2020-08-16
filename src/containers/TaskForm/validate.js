const validate = (value) => {
    const errors = {};
    const { title, description } = value;
    if (!title) {
        errors.title = 'Vui lòng nhập tiêu đề';
    } else if (title.trim() && title.length < 5) {
        errors.title = 'Vui lòng nhập ít nhất 5 kí tự';
    }

    if (!description) {
        errors.description = 'Vui lòng nhập miêu tả';
    } else if (description.trim() && description.length < 5) {
        errors.description = 'Vui lòng nhập ít nhất 5 kí tự';
    }
    return errors;
}

export default validate;