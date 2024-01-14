import React, {useState}from 'react'
export const useAuth = () => {
  const [tokenAuth, setTokenAuth] = useState(null)

  return {
    tokenAuth,
    setTokenAuth
  }
}
