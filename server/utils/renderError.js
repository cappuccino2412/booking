const renderError = (code,message) => {
    const error = new Error(message); //Error คือ class ของ js เป็น global object ที่ใช้จัดการ error
    error.statusCode = code;

    throw error;
}

module.exports = renderError;