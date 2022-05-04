export const authConfig = {
  SECRET: String(process.env.JWT_SECRET),
  EXPIRES_IN: process.env.JWT_EXPIRES_IN
}
