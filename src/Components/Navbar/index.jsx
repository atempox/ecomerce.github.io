import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCardContext)
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to= '/'>
                        Shopi    
                    </NavLink >
                </li>
                <li>
                    <NavLink to= '/'
                    onClick={() => context.setSearchByCategory()}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/fornitures'
                    onClick={() => context.setSearchByCategory('fornitures')}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/toys'
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    fate@gmail.com                    
                </li>
                <li>
                    <NavLink to= '/myOrders'
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/myAccount'
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/signIn'
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex">
                    <ShoppingBagIcon className='size-5 text-black/30'/> 
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>

        </nav>
    )
};

export default Navbar