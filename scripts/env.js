const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
  isDevelopment,
  isProduction,
}
