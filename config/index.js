const developement = process.env.NODE_ENV !== 'production'

export const server = developement ? 'http://localhost:3000' : 'https://deployedwebsite.com'