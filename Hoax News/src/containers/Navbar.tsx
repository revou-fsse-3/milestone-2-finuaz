import {
	NavigationMenu,
	NavigationMenuContent,
	// NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	// NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
	return (
        <div className='flex flex-row p-8 bg-fuchsia-800 justify-between'>
            <div className='flex flex-col'>
                <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight lg:text-5xl text-secondary">
                    Hoax News
                </h1>
                <h2 className='scroll-m-20 text-xl font-semibold tracking-tight text-secondary'>
                    Don't read this!
                </h2>
            </div>
            <div>
                <Input type="text" placeholder="Search..." className='text-secondary placeholder:text-secondary' />
            </div>
            <NavigationMenu className='flex flex-row p-8 bg-fuchsia-800'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Business</NavigationMenuLink> <br />
                            <NavigationMenuLink>Entertainment</NavigationMenuLink> <br />
                            <NavigationMenuLink>General</NavigationMenuLink> <br />
                            <NavigationMenuLink>Health</NavigationMenuLink> <br />
                            <NavigationMenuLink>Science</NavigationMenuLink> <br />
                            <NavigationMenuLink>Sports</NavigationMenuLink> <br />
                            <NavigationMenuLink>Technology</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
	)
}

export default Navbar
