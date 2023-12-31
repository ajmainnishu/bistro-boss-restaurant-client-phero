import { useQuery } from "@tanstack/react-query";

const useFetchData = () => {
    const { refetch, data: menu = [], isLoading: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-restaurant-server-phero.vercel.app/menu')
            return res.json();
        }
    })
    return [menu, loading, refetch];
};

export default useFetchData;