const proxy = [
    {
        context: '/api',
        target: 'http://localhost:8080'
    }
];
module.exports = proxy;
