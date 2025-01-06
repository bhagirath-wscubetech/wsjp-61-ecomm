
const getRandomFileName = (file_name) => {
    return (Math.random() * 10000) + (new Date().getTime()) + file_name;
}

module.exports = { getRandomFileName };