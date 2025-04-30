// import { Button } from '@/components/ui/button'
// import React from 'react'

// const Logout = () => {
//   return (
//     <>
//    <Button variant="default" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
//   Logout
// </Button>

//     </>
//   )
// }

// export default Logout
import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('user')
    
    // Redirect to login
    navigate('/login')
    
    // Optional: Force reload to clear any state
    window.location.reload()
  }

  return (
    <Button 
      variant="default" 
      className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogout}
    >
      Logout
    </Button>
  )
}

export default Logout