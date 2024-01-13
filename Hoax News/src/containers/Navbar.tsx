import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom';
import { Separator } from "@/components/ui/separator"
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');


    const navigateToCategory = (categoryValue : string) => {
        navigate(`/categories/${categoryValue}`);
    };    
    
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            // Update the URL with the search query 
            console.log(searchQuery)
            navigate(`/search-result/${searchQuery}`);
            // setSearchQuery('')
        }
    };


	return (
        <div className='flex flex-row p-8 bg-gradient-to-r from-purple-900 via-indigo-500 to-violet-600 justify-around items-center'>
            <div className='flex flex-col pr-16'>
                <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight lg:text-5xl text-secondary">
                    Hoax News
                </h1>
                <h2 className='scroll-m-20 text-l font-semibold tracking-tight text-secondary'>
                    You are not supposed to read this
                </h2>
            </div>
            <div className='flex flex-row'>
                <Input 
                    type="text" 
                    placeholder="Search . . ." 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    className='text-secondary placeholder:text-secondary w-[40rem] focus:border-[3px] focus:border-amber-500 focus:bg-slate-100 focus:text-purple-900'
                />
            </div>
            <NavigationMenu className='flex flex-row p-8'>
                <NavigationMenuList>
                    <NavigationMenuItem className="flex h-5 items-center space-x-4 text-sm text-secondary">
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('general')}>General</button>
                        <Separator orientation="vertical" />
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('business')}>Business</button>
                        <Separator orientation="vertical" />
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('technology')}>Technology</button>
                        <Separator orientation="vertical" />
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('science')}>Science</button>
                        <Separator orientation="vertical" />
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('health')}>Health</button>
                        <Separator orientation="vertical" />
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('sports')}>Sports</button>
                        <Separator orientation="vertical" />
                        <button className='cursor-pointer text-secondary bg-transparent' onClick={() => navigateToCategory('Entertainment')}>Entertainment</button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
	)
}

export default Navbar
