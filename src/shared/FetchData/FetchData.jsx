import { useEffect, useState } from "react";

const FetchData = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    const salad = menu.filter(item => item.category === 'salad');
    const drink = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const popular = menu.filter(item => item.category === 'popular');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return [menu, loading, salad, drink, dessert, popular, pizza, soup, offered];
};

export default FetchData;