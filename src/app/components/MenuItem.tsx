import Link from 'next/link'
import React, { FC } from 'react'

interface MenuItemProps {
    title: string,
    address: string,
    Iconx: React.ComponentType<{
        className?: string;
      }>
}

const MenuItem = ({ title, address, Iconx }: MenuItemProps) => {
    return (
        <div>
            <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
                <Iconx className="text-2xl sm:hidden mx-4" />
                <p className="hidden sm:inline my-2 text-sm">{title}</p>
            </Link>
        </div>
    )
}

export default MenuItem