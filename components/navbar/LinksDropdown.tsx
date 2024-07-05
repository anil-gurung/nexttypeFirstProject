import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from './UserIcon';
import { SignInButton, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './SignOutLink';

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100]'>
                    <LuAlignLeft className='w-6 h-6' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-37' align='center' sideOffset={10}>
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton>
                            <button className='w-full text-left'>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignUpButton>
                            <button className='w-full text-left'>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>
                <SignedIn>
                    {links.map((link) => {
                        return <DropdownMenuItem key={link.href}>
                            <Link href={link.href} className='capitalize w-full'>
                                {link.label}
                            </Link>
                        </DropdownMenuItem>
                    })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignOutLink />
                    </DropdownMenuItem>
                </SignedIn>


            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default LinksDropdown