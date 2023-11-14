import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
    // user state
    const { user } = useContext(AuthContext);
    // jwt token get
    const token = localStorage.getItem('bistro-boss-jwt-token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json();
        }
    })
    return [cart, refetch];
};

export default useCart;