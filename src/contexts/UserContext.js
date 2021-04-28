import React from 'react'

const UserContext = React.createContext()

export const LoginProvider = UserContext.Provider
export const LoginConsumer = UserContext.Consumer

export default UserContext